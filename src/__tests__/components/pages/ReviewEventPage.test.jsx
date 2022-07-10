import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewEventPage from 'components/pages/ReviewEventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: '100',
  }),
}));

const { MemoryRouter } = jest.requireActual('react-router-dom');

describe('Review event page', () => {
  it('renders placeholder text', async () => {
    render(
      <MemoryRouter>
        <ReviewEventPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Conference/i)[0]).toBeInTheDocument();
      expect(screen.getByText(/Citizen Science and Engineering/i)).toBeInTheDocument();
    });
  });
});
