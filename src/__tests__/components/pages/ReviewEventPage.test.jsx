import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewEventPage from 'components/pages/ReviewEventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: '100',
  }),
}));

jest.mock('hooks/events', () => ({
  useEvent: (eventId) => ({
    id: eventId,
    organizationName: 'Example Org',
    tags: [],
    speakers: [],
    accessibilityOptions: [],
  })
}));

const { BrowserRouter } = jest.requireActual('react-router-dom');

describe('Review event page', () => {
  it('renders placeholder text', async () => {
    render(
      <BrowserRouter>
        <ReviewEventPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Example Org/i)[0]).toBeInTheDocument();
    });
  });
});
