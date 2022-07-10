import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SignInForm from 'components/elements/SignInForm';

describe('Sign In Form', () => {
  it('renders correct copy', () => {
    render(
      <Router>
        <SignInForm />
      </Router>
    );

    expect(screen.getByText(/Username or email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
