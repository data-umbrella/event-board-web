import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostEventSuccessPage from 'components/pages/PostEventSuccessPage';

describe('Post event success page', () => {
  it('renders placeholder text', () => {
    render(<PostEventSuccessPage />);

    expect(screen.getByText(/Thank you for submitting your event!/i))
      .toBeInTheDocument();
  });
});
