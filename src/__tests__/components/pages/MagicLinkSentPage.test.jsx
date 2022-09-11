import React from 'react';
import { render, screen } from '@testing-library/react';
import MagicLinkSentPage from 'components/pages/MagicLinkSentPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    search: '?email=example@example.com',
  }),
}));

describe('Magic Link Sent Page', () => {
  it('renders expected copy', () => {
    render(<MagicLinkSentPage />);

    expect(screen.getByText(/We've sent you a magic link to login!/i)).toBeInTheDocument();
    expect(screen.getByText(/Please check your email/i)).toBeInTheDocument();
    expect(screen.getByText(/example@example.com/i)).toBeInTheDocument();
  });
});
