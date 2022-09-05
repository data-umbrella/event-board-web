import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPage from 'components/pages/PrivacyPolicyPage';

describe('Privacy Policy Page', () => {
  it('renders placeholder text', () => {
    render(<PrivacyPage />);

    expect(screen.getByText(/Collection of Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });
});
