import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import { createEvent } from 'services/events';

function NewEventPage() {
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    try {
      const evt = await createEvent(values);
      navigate(`/events/${evt.id}/review`);
    } catch (e) {
      // TODO: Gracefully handle error messages.
      window.alert(e.message);
    }
  }

  return <EventForm handleFormSubmit={handleFormSubmit} />;
}

export default NewEventPage;
