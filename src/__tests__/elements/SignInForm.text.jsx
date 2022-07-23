import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';

describe('Sign In Form', () => {
  it('renders correct copy', () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    expect(screen.getByText(/Username or email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
