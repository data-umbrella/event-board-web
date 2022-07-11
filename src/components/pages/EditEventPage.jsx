// React dependencies
import { useNavigate, useParams } from 'react-router-dom';

// Third-party dependencies
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

// Constants
import usStates from 'constants/us-states';
import timezones from 'constants/timezones';
import timeSlots from 'constants/time-slots';
import { eventProperties } from 'constants/events';
import formStyleClasses from 'styles/forms';

// Components
import DatePickerField from 'components/elements/DatePickerField';
import ValidatedInput from 'components/elements/ValidatedInput';
import EventForm from 'components/elements/EventForm';
import { useEvent } from 'hooks/events';

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const evt = useEvent(eventId);

  async function handleFormSubmit(values) {
    const tempID = uuidv4();
    localStorage.setItem(tempID, JSON.stringify({ ...values, id: evt.id }));
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
