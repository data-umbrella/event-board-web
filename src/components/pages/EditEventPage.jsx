// React dependencies
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import EventForm from 'components/elements/EventForm';
import { useEvent } from 'hooks/events';
import { updateEvent } from 'services/api';

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const evt = useEvent(eventId);

  async function handleFormSubmit(values) {
    try {
      await updateEvent(evt.id, values);
      navigate(`/events/${evt.id}/review`);
    } catch (e) {
      window.alert(e);
    }
  }

  if (!evt) return 'Loading...'

  return (
    <EventForm
      handleFormSubmit={handleFormSubmit}
      defaultValues={evt}
      eventId={evt.id}
    />
  )
}

export default EditEventPage;
