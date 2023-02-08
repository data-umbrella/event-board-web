import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import moment from 'moment';

describe('Event Form', () => {
  it('validates required fields', async () => {
    render(
      <MemoryRouter>
        <EventForm />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Review/i)).toBeInTheDocument();

    await act(() => {
      fireEvent.click(screen.getByText('Review'))
    });

    expect(screen.getAllByText(/Field is required/i)[0]).toBeInTheDocument();
  });

  it('submits valid event', async () => {
    const mockHandleFormSubmit = jest.fn();
    const dateString = moment().format('YYYY-MM-DD');
    
    render(
      <MemoryRouter>
        <EventForm handleFormSubmit={mockHandleFormSubmit}/>
      </MemoryRouter>
    );

    const eventNameInput = screen.getByLabelText(/Event Name/i);
    const eventDescriptionInput = screen.getByLabelText(/Event Description/i);
    const startDateInput = screen.getAllByLabelText(/Start Date/i)[0];
    const eventUrlInput = screen.getAllByLabelText(/Event Registration URL/i)[0];

    expect(eventNameInput).toBeInTheDocument();
    expect(eventDescriptionInput).toBeInTheDocument();
    expect(startDateInput).toBeInTheDocument();
    expect(eventUrlInput).toBeInTheDocument();

    await act(() => {
      fireEvent.change(eventNameInput, { target: { value: 'Example name' } });
      fireEvent.change(eventDescriptionInput, { target: { value: 'Example Description of the Event' } });
      fireEvent.change(startDateInput, { target: { value: dateString } });
      fireEvent.change(eventUrlInput, { target: { value: 'http://www.example.com' } });
      fireEvent.click(screen.getByText('Review'));
    });

    expect(mockHandleFormSubmit).toHaveBeenCalled();

    const formSubmitArgs = mockHandleFormSubmit.mock.calls[0][0];

    expect(formSubmitArgs['eventName']).toBe('Example name');
    expect(formSubmitArgs['startDate'].toISOString()).toMatch(dateString);
    expect(formSubmitArgs['description']).toBe('Example Description of the Event');
  });
});
