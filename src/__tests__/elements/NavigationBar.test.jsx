import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from 'components/elements/NavigationBar';
import authHooks, { AuthProvider } from 'hooks/authentication';

jest.mock('hooks/authentication', () => ({
  ...jest.requireActual('hooks/authentication'),
  useAuth: () => ({
    currentUser: {
      isAuthenticated: false,
    }
  })
}));

describe('Navigation bar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('unauthenticated', () => {
    it('renders expected links', () => {
      authHooks.useAuth = () => {
        return { currentUser: { isAuthenticated: false } }
      }

      render(
        <AuthProvider>
          <Router>
            <NavigationBar />
          </Router>
        </AuthProvider>
      );

      expect(screen.getByText(/Event Calendar/i).href).toMatch('/events/calendar');
      // expect(screen.getByText(/Weekly Digest/i).href).toMatch('/events/weekly-digest');
      expect(screen.getByText(/Data Umbrella/i).href).toMatch('www.dataumbrella.org');
      expect(screen.getByText(/Sponsors/i).href).toMatch('/sponsors');
      expect(screen.getByText(/Sign In/i).href).toMatch('/sign-in');
    });
  });

  describe('authenticated', () => {
    it('renders sign out link when authenticated', () => {
      authHooks.useAuth = () => {
        return { currentUser: { isAuthenticated: true } }
      }
      
      render(
        <AuthProvider>
          <Router>
            <NavigationBar />
          </Router>
        </AuthProvider>
      );

      expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
    });
  });
});
