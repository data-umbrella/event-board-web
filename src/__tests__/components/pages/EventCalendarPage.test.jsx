import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventCalendarPage from 'components/pages/EventCalendarPage';
import { act } from 'react-dom/test-utils';

const EXAMPLE_EVENT = {
  id: 1,
  eventName: 'Example event name',
  startDate: '2022-09-01',
  endDate: '2022-09-01',
}

jest.mock('hooks/events', () => ({
  useSearchEvents: () => ([
    [EXAMPLE_EVENT],
    jest.fn(),
  ]),
}));

describe('Event Calendar Page', () => {
  beforeAll(() => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2022-09-01'));
  });

  it('renders events on page load', () => {
    render(
      <MemoryRouter>
        <EventCalendarPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Advanced Filters/i)).toBeInTheDocument();
    expect(screen.getByText(/Example event name/i)).toBeInTheDocument();
  });

  describe('Search', () => {
    let mockSetSearch = jest.fn();

    beforeEach(() => {
      require('hooks/events').useSearchEvents = () => {
        return [
          [EXAMPLE_EVENT],
          mockSetSearch,
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
        fireEvent.change(searchInput, { target: { value: 'test' } });
        fireEvent.submit(searchInput);
      });

      expect(mockSetSearch).toHaveBeenCalledWith({
        endDate: "02/28/2023",
        eventType: '',
        language: '',
        price: '',
        region: '',
        search: 'test',
        startDate: "08/31/2022",
        topic: '',
      });
    });
  });
});
