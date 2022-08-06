import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewEventPage from 'components/pages/NewEventPage';

describe('New Event Page', () => {
  it('renders form heading', () => {
    render(
      <MemoryRouter>
        <NewEventPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Organization Name/i)).toBeInTheDocument();
  });
});
