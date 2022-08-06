// React dependencies
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import EventForm from 'components/elements/EventForm';
import { useEvent } from 'hooks/events';
import { sessionStore } from 'utils/sessions';

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const evt = useEvent(eventId);

  function handleFormSubmit(values) {
    sessionStore(eventId, values);
    navigate(`/events/${eventId}/review`);
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
