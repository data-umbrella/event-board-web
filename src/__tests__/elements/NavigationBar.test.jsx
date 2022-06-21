import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavigationBar from 'components/elements/NavigationBar';

describe('Navigation bar', () => {
  it('renders expected links', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    expect(screen.getByText(/Event Calendar/i).href).toMatch('/events/calendar');
    expect(screen.getByText(/Weekly Digest/i).href).toMatch('/events/weekly-digest');
    expect(screen.getByText(/Data Umbrella/i).href).toMatch('www.dataumbrella.org');
    expect(screen.getByText(/Sponsors/i).href).toMatch('/sponsors');
    expect(screen.getByText(/Sign In/i).href).toMatch('/sign-in');
  });
});
