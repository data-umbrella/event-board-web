import { render, screen } from '@testing-library/react';
import EditEventPage from 'components/pages/EditEventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: 'example-event-id',
  }),
}));

describe('Edit Event Page', () => {
  it('renders placeholder text', () => {
    render(<EditEventPage />);

    expect(screen.getByText(/Edit Event #example-event-id/i)).toBeInTheDocument();
  });
});
