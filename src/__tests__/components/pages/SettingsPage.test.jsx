import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPage from 'components/pages/SettingsPage';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from 'hooks/authentication';

jest.mock('hooks/authentication', () => ({
  ...jest.requireActual('hooks/authentication'),
  useAuth: () => ({
    currentUser: {
      isAuthenticated: false,
    }
  })
}));

describe('Settings Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders placeholder text', () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <SettingsPage />
        </MemoryRouter>
      </AuthProvider>
    );
    expect(screen.getByText(/Delete Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Edit Email/i)).toBeInTheDocument();
  });
});
