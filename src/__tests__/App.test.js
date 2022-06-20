import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Navigating to the login page', () => {
  it('routing works', async () => {
    render(<App />);

    const linkElement = screen.getByText(/Sign In/i);

    await userEvent.click(linkElement);

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
