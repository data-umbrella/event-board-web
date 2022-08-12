import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQsPage from 'components/pages/FAQsPage';

describe('FAQs Page', () => {
  it('renders placeholder text', () => {
    render(<FAQsPage />);

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText(/I could not enter information into the form/i)).toBeInTheDocument();
  });
});
