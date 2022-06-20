import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventPage from 'components/pages/EventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: 'example-event-id',
  }),
}));

describe('Event Page', () => {
  it('renders placeholder text', () => {
    render(<EventPage />);

    expect(screen.getByText(/Event #example-event-id/i)).toBeInTheDocument();
  });
});
