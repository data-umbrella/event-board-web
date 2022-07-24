import { useNavigate } from 'react-router-dom';
import EventForm from 'components/elements/EventForm';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from 'hooks/authentication';

function NewEventPage() {
  const navigate = useNavigate();
  const auth = useAuth();

  console.log(auth.currentUser)

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
