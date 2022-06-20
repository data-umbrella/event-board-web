import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DonatePage from 'components/pages/DonatePage';

describe('Donate page', () => {
  it('renders expected copy', () => {
    render(<DonatePage />);

    expect(screen.getByText(/To support Data Umbrella/i)).toBeInTheDocument();
  });
});
