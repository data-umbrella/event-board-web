import { render, screen } from '@testing-library/react';
import EventMapView from 'components/elements/EventMapView';

describe('Event map view', () => {
  it('renders expected copy', () => {
    render(<EventMapView />);

    expect(screen.getByText(/Placeholder Title/i)).toBeInTheDocument();
  });
});
