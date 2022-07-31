// React dependencies
import { useNavigate, useParams } from 'react-router-dom';

// Third-party dependencies
import { v4 as uuidv4 } from 'uuid';

// Components
import EventForm from 'components/elements/EventForm';
import { useEvent } from 'hooks/events';

// Utils
import { imageFileToDataURL } from 'utils/files';
import { api, buildFormDataObject } from 'services/api';

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const evt = useEvent(eventId);

  async function handleFormSubmit(values) {
    sessionStorage.setItem(eventId, JSON.stringify(values));
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
