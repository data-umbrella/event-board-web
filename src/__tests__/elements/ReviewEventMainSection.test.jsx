import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';

describe('Event map view', () => {
  it('renders registration link', () => {
    const event = {
      eventName: 'Test Event',
      eventType: 'Test Type',
      description: 'Test Description',
      eventUrl: 'https://www.test.com',
    }
    
    render(<ReviewEventMainSection evt={event} />);

    const registrationLink = screen.getByText(/Register/i);

    expect(registrationLink).toHaveAttribute('href', 'https://www.test.com');
    expect(registrationLink).toHaveAttribute('target', '_blank');
  });
});
