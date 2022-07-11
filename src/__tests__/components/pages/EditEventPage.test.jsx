import { render, screen, waitFor } from '@testing-library/react';
import EditEventPage from 'components/pages/EditEventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: 100,
  }),
}));

const { MemoryRouter } = jest.requireActual('react-router-dom');

describe('Edit Event Page', () => {
  it('renders placeholder text', async () => {
    render(
      <MemoryRouter>
        <EditEventPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByLabelText(/Name of Organization/i).value)
        .toEqual('Sustainable Progress and Equality Collective');
    });
  });
});
