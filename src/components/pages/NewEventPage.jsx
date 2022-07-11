import { useNavigate } from 'react-router-dom';
import formStyleClasses from 'styles/forms';
import EventForm from 'components/elements/EventForm';
import { API_URL } from 'constants/urls';
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
