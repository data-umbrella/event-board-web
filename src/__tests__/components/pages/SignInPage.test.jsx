import { render, screen } from '@testing-library/react';
import SignInPage from 'components/pages/SignInPage';
import { MemoryRouter } from 'react-router-dom';

describe('Sign In Page', () => {
  it('renders authentication action buttons', () => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
