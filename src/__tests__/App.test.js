import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Navigating to the login page', () => {
  it('routing works', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/Sign In/i);

    await userEvent.click(linkElement);

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  describe('Sponsors route', () => {
    it('renders sponsor page content', async () => {
      render(
        <MemoryRouter initialEntries={['/sponsors']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/If you would like to sponsor/i)).toBeInTheDocument();
    });
  });

  describe('Donate route', () => {
    it('renders sponsor page content', async () => {
      render(
        <MemoryRouter initialEntries={['/donate']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/To support Data Umbrella/i)).toBeInTheDocument();
    });
  });
});
