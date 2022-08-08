import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import { v4 as uuidv4 } from 'uuid';
import { sessionStore } from 'utils/sessions';

function NewEventPage() {
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    const tempID = uuidv4();
    sessionStore(tempID, values);
    navigate(`/events/${tempID}/review`);
  }

  return (
    <EventForm handleFormSubmit={handleFormSubmit} />
  )
}

export default NewEventPage;
