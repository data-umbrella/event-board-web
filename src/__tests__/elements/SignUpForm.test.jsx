import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SignUpForm from 'components/elements/SignUpForm';

describe('Sign Up Form', () => {
  it('renders correct copy', () => {
    render(
      <Router>
        <SignUpForm />
      </Router>
    );

    expect(screen.getByText(/Username or email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});
