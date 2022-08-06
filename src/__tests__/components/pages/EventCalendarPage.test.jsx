import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventCalendarPage from 'components/pages/EventCalendarPage';

describe('Event Calendar Page', () => {
  it('renders form heading', () => {
    render(
      <MemoryRouter>
        <EventCalendarPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Example All-Day Event/i)).toBeInTheDocument();
    expect(screen.getByText(/Example Timed Event/i)).toBeInTheDocument();
  });
});
