import { render, screen } from '@testing-library/react';
import SignInPage from 'components/pages/SignInPage';

describe('Sign In Page', () => {
  it('renders authentication action buttons', () => {
    render(<SignInPage />);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});
