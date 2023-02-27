import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';

describe('Event map view', () => {
  it('renders registration link', () => {
    const event = {
      eventName: 'Test Event',
      eventType: 'Test Type',
      description: 'Test Description',
      eventUrl: 'https://www.test.com',
      socialMediaLinks: []
    }
    
    render(<ReviewEventMainSection evt={event} />, { wrapper: BrowserRouter });

    const registrationLink = screen.getByText(/Register/i);

    expect(registrationLink).toHaveAttribute('href', 'https://www.test.com');
    expect(registrationLink).toHaveAttribute('target', '_blank');
    expect(registrationLink).toHaveAttribute('rel', 'noreferrer');
  });
});
