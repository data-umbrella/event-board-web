import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventCalendarPage from 'components/pages/EventCalendarPage';

describe('Event Calendar Page', () => {
  it('renders form heading', () => {
    render(<EventCalendarPage />);

    expect(screen.getByText(/Event Calendar/i)).toBeInTheDocument();
  });
});
