import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NewEventPage from 'components/pages/NewEventPage';

describe('New Event Page', () => {
  it('renders form heading', () => {
    render(<MemoryRouter><NewEventPage /></MemoryRouter>);

    expect(screen.getByText(/Name of Organization/i)).toBeInTheDocument();
  });
});
