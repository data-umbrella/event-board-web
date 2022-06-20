import { render, screen } from '@testing-library/react';
import SignInPage from 'components/pages/SignInPage';

describe('New Event Page', () => {
  it('renders form heading', () => {
    render(<SignInPage />);

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
