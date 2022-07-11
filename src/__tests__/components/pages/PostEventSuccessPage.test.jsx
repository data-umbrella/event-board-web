import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostEventSuccessPage from 'components/pages/PostEventSuccessPage';

describe('Post event success page', () => {
  it('renders placeholder text', () => {
    render(
      <MemoryRouter>
        <PostEventSuccessPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Thank you for submitting your event!/i))
      .toBeInTheDocument();
  });
});
