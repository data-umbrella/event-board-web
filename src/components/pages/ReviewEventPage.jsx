import { useParams, useNavigate } from 'react-router-dom';

import AccessibilitySection from 'components/elements/AccessibilitySection';
import DescriptionSection from 'components/elements/DescriptionSection';
import EventPlanningSection from 'components/elements/EventPlanningSection';
import NotesSection from 'components/elements/NotesSection';
import ReviewEventActionsSection from 'components/elements/ReviewEventActionsSection';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';
import SpeakersSection from 'components/elements/SpeakersSection';

import { useEvent } from 'hooks/events';
import { api } from 'services/api';

function ReviewEventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const evt = useEvent(eventId);

  async function handleSubmit () {
    const eventData = JSON.parse(localStorage.getItem(eventId));

    if (evt.id) {
      try {
        await api('PUT', `events/${evt.id}`, eventData);
        navigate(`/events/${evt.id}/details`);
      } catch (e) {
        console.log(e);
        return;
      }
    } else {
      try {
        const newEvent = await api('POST', 'events', { ...eventData, published: true });
        console.log(newEvent);
        navigate('/events/confirmation');
      } catch (e) {
        console.log(e)
        return;
      }
    }

    localStorage.removeItem(eventId);
  }

  function editEvent () {
    navigate(`/events/${eventId}/edit`)
  }

  if (!evt) return 'Loading...'

  return (
    <div className="container mx-auto pt-16 mb-24">
      <ReviewEventMainSection evt={evt} />
      <EventPlanningSection evt={evt} />
      <DescriptionSection evt={evt} />
      <SpeakersSection evt={evt} />
      <NotesSection evt={evt} />
      <AccessibilitySection evt={evt} />
      <ReviewEventActionsSection
        handleSubmit={handleSubmit}
        editEvent={editEvent}
        evt={evt}
      />
    </div>
  )
}

export default ReviewEventPage;
