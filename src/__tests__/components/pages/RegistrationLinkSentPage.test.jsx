import React from 'react';
import { render, screen } from '@testing-library/react';
import RegistrationLinkSentPage from 'components/pages/RegistrationLinkSentPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    search: '?email=example@example.com',
  }),
}));

describe('Registration Link Sent Page', () => {
  it('renders expected copy', () => {
    render(<RegistrationLinkSentPage />);

    expect(screen.getByText(/We've sent you a link to confirm your account!/i)).toBeInTheDocument();
    expect(screen.getByText(/Please check your email/i)).toBeInTheDocument();
    expect(screen.getByText(/example@example.com/i)).toBeInTheDocument();
  });
});
