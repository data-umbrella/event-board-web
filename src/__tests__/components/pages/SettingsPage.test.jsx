import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPage from 'components/pages/SettingsPage';
import { MemoryRouter } from 'react-router-dom';

describe('Settings Page', () => {
  it('renders placeholder text', () => {
    render(
      <MemoryRouter>
        <SettingsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Delete Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Edit Email/i)).toBeInTheDocument();
    
  });
});
