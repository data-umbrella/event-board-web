import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeeklyDigestPage from 'components/pages/WeeklyDigestPage';

describe('Weekly digest sign up', () => {
  it('renders heading', () => {
    render(<WeeklyDigestPage />);

    expect(screen.getByText(/Data Umbrella’s Events Weekly Digest/i))
      .toBeInTheDocument();
  });
});
