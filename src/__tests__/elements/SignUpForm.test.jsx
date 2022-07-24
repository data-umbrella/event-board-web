import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from 'components/elements/SignUpForm';

describe('Sign Up Form', () => {
  it('renders correct copy', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});
