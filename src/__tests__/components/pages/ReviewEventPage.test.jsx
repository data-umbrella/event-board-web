import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewEventPage from 'components/pages/ReviewEventPage';

describe('Review event page', () => {
  it('renders placeholder text', () => {
    render(<ReviewEventPage />);

    expect(screen.getByText(/Review Event/i)).toBeInTheDocument();
  });
});
