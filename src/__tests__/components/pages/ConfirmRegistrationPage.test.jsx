import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfirmRegistrationPage from 'components/pages/ConfirmRegistrationPage';

describe('Confirm Registration Page', () => {
  it('renders expected copy', () => {
    render(<ConfirmRegistrationPage />);

    expect(screen.getByText(/We've sent you an email/i)).toBeInTheDocument();
  });
});
