// React dependencies
import { useNavigate, useParams } from 'react-router-dom';

// Third-party dependencies
import { v4 as uuidv4 } from 'uuid';

// Components
import EventForm from 'components/elements/EventForm';
import { useEvent } from 'hooks/events';
// import { useAuth } from 'hooks/authentication';

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  // const { currentUser } = useAuth();
  const evt = useEvent(eventId);

  async function handleFormSubmit(values) {
    const tempID = uuidv4();
    localStorage.setItem(tempID, JSON.stringify({ ...values, id: evt.id }));

    // console.log(currentUser);

    navigate(`/events/${tempID}/review`);
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
