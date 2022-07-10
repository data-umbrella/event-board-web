import { render, screen } from '@testing-library/react';
import DonatePage from 'components/pages/DonatePage';

describe('Donate page', () => {
  it('renders expected copy', () => {
    render(<DonatePage />);

    expect(screen.getByText(/To support Data Umbrella/i)).toBeInTheDocument();
  });
});
