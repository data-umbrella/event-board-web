import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventCalendarPage from 'components/pages/EventCalendarPage';
import { act } from 'react-dom/test-utils';
import moment from 'moment';
import { DATE_PICKER_STRING_FORMAT } from  'constants/dates';

const EXAMPLE_EVENT = {
  id: 1,
  eventName: 'Example event name',
  startDate: '2022-09-01',
  endDate: '2022-09-01',
  tags: 'python',
}

jest.mock('hooks/events', () => ({
  useSearchEvents: () => ([
    { results: [EXAMPLE_EVENT] },
    jest.fn(),
    jest.fn(),
    { startDate: '08/17/2022', endDate: '08/17/2022' },
  ]),
}));

describe('Event Calendar Page', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-09-01'));
  });
  
  it('renders events on page load', () => {
    render(
      <MemoryRouter>
        <EventCalendarPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Advanced Filters/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Example event name/i)).toHaveLength(3);
    //updated expectation toHaveLength as 3 to accommodate for popup info
  });

  describe('Search', () => {
    let mockSetSearch = jest.fn();

    beforeEach(() => {
      require('hooks/events').useSearchEvents = () => {
        return [
          { results: [EXAMPLE_EVENT] },
          mockSetSearch,
          jest.fn(),
          { startDate: '08/17/2022', endDate: '08/17/2022' },
        ]
      }
    });

    it('triggers search on form submit', async () => {
      render(
        <MemoryRouter>
          <EventCalendarPage />
        </MemoryRouter>
      );

      const searchInput = screen.getByPlaceholderText('Search');

      expect(searchInput).toBeInTheDocument();

      await act(() => {
        fireEvent.change(searchInput, { target: { value: 'test query' } });
        fireEvent.submit(searchInput);
      });

      expect(mockSetSearch.mock.calls[0][0]['search']).toEqual('test query');
      expect(mockSetSearch.mock.calls[0][0]['startDate'])
        .toEqual(moment().subtract(2, 'weeks').format(
          DATE_PICKER_STRING_FORMAT
        ));
    });
  });
});
