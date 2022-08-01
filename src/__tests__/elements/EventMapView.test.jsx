import { render, screen } from '@testing-library/react';
import EventMapView from 'components/elements/EventMapView';

describe('Donate page', () => {
  it('renders expected copy', () => {
    render(<EventMapView />);

    expect(screen.getByText(/Placeholder Title/i)).toBeInTheDocument();
  });
});
