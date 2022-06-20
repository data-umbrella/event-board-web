import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Home Page', () => {
  it('renders placeholder heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/Data Umbrella Community Events/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Login Page', () => {
  it('renders placeholder heading', async () => {
    render(<App />);

    const linkElement = screen.getByText(/Login/i);

    await userEvent.click(linkElement);

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
