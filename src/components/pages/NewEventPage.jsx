import { useNavigate } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import { v4 as uuidv4 } from 'uuid';

function NewEventPage() {
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    const tempID = uuidv4();
    localStorage.setItem(tempID, JSON.stringify(values));
    navigate(`/events/${tempID}/review`);
  }

  return (
    <EventForm handleFormSubmit={handleFormSubmit} />
  )
}

export default NewEventPage;
