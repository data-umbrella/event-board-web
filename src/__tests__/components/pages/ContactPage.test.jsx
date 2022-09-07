import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUsPage from 'components/pages/ContactPage';
import { MemoryRouter } from 'react-router-dom';

describe('Contact Us Page', () => {
  it('renders text', () => {
    render(
      <MemoryRouter>
        <ContactUsPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/For feature suggestions, bug reports, etc/i))
      .toBeInTheDocument();
  });
});
