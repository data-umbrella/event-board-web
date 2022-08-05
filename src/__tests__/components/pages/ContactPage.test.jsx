import { render, screen } from '@testing-library/react';
import ContactUsPage from 'components/pages/ContactPage';

describe('Contact Us Page', () => {
  it('renders text', () => {
    render(<ContactUsPage />);

    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/For feature suggestions, bug reports, etc for the Event Board, please open up an issue here/i)).toBeInTheDocument();
  });
});
