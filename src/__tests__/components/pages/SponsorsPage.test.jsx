import React from 'react';
import { render, screen } from '@testing-library/react';
import SponsorsPage from 'components/pages/SponsorsPage';

describe('Sponsors Page', () => {
  it('renders placeholder text', () => {
    render(<SponsorsPage />);

    expect(screen.getByText(/Sponsors!/i)).toBeInTheDocument();
    expect(screen.getByText(/If you would like to sponsor/i)).toBeInTheDocument();
    expect(screen.getByText(/CZI/i)).toBeInTheDocument();
  });
});
