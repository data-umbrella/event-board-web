import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VerifyMagicLinkPage from 'components/pages/VerifyMagicLinkPage';

jest.mock('hooks/authentication', () => ({
  useAuth: () => ({
    currentUser: { isAuthenticated: false },
    verifyOneTimePassCode: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Verify Magic Link Page', () => {
  describe('Loading', () => {
    it('renders loading text', () => {
      render(
        <MemoryRouter>
          <VerifyMagicLinkPage />
        </MemoryRouter>
      );

      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });
  });

  describe('Errors', () => {
    beforeEach(() => {
      require('hooks/authentication').useAuth = () => {
        return {
          verifyOneTimePassCode: (token, email, callback) => callback(false, 'Error message'),
        }
      }
    });
    
    it('renders error message', async () => {  
      render(
        <MemoryRouter>
          <VerifyMagicLinkPage />
        </MemoryRouter>
      );

      expect(screen.getByText(/Error message/i)).toBeInTheDocument();    
    });
  });

  describe('Success', () => {
    let mockNavigate = jest.fn();

    beforeEach(() => {
      require('react-router-dom').useNavigate = () => mockNavigate

      require('hooks/authentication').useAuth = () => {
        return {
          verifyOneTimePassCode: (token, email, callback) => callback(true, null),
        }
      }
    });
    
    it('navigates to root page', async () => {  
      render(
        <MemoryRouter>
          <VerifyMagicLinkPage />
        </MemoryRouter>
      );

      expect(screen.getByText(/Success!/i)).toBeInTheDocument();
    });
  });
});
