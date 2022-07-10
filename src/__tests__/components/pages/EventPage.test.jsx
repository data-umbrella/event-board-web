import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventPage from 'components/pages/EventPage';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: '100',
  }),
}));

describe('Event Page', () => {
  it('renders placeholder text', () => {
    render(
      <MemoryRouter>
        <EventPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading../i)).toBeInTheDocument();
  });
});
