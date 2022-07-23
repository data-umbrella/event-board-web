import { render, screen } from '@testing-library/react';
import WeeklyDigestPage from 'components/pages/WeeklyDigestPage';

describe('Weekly digest sign up', () => {
  it('renders heading', () => {
    render(<WeeklyDigestPage />);

    expect(screen.getByText(/Data Umbrella’s Events Weekly Digest/i))
      .toBeInTheDocument();
  });
});
