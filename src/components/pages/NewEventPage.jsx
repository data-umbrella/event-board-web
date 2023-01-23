import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import { api } from 'services/api';

function NewEventPage() {
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    try {
      const evt = await api('POST', `events`, values);
      navigate(`/events/${evt.id}/review`);
    } catch (e) {
      // TODO: Gracefully handle error messages.
      window.alert(e.message);
    }
  }

  return <EventForm handleFormSubmit={handleFormSubmit} />;
}

export default NewEventPage;
