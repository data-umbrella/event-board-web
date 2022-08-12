import React from 'react';
import { render, screen } from '@testing-library/react';
import EditEventPage from 'components/pages/EditEventPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    eventId: 100,
  }),
}));

jest.mock('hooks/events', () => ({
  useEvent: () => ({
    id: 1,
    organizationName: 'Example Org',
  })
}));

const { BrowserRouter } = jest.requireActual('react-router-dom');

describe('Edit Event Page', () => {
  it('renders placeholder text', async () => {
    render(
      <BrowserRouter>
        <EditEventPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Organization Name/i).value).toEqual('Example Org');
  });
});
