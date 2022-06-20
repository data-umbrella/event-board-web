import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewEventPage from 'components/pages/NewEventPage';

describe('New Event Page', () => {
  it('renders form heading', () => {
    render(<NewEventPage />);

    expect(screen.getByText(/Event Submission Form/i)).toBeInTheDocument();
  });
});
