import { useParams, useNavigate } from 'react-router-dom';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';
import EventPlanningSection from 'components/elements/EventPlanningSection';
import AccessibilitySection from 'components/elements/AccessibilitySection';
import DescriptionSection from 'components/elements/DescriptionSection';
import SpeakersSection from 'components/elements/SpeakersSection';
import NotesSection from 'components/elements/NotesSection';
import { eventStyleClasses } from 'styles/events';
import { useEvent } from 'hooks/events';

function EventDetailsPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const evt = useEvent(eventId);

  function editEvent () {
    navigate(`/events/${eventId}/edit`)
  }

  if (!evt) return 'Loading...'

  return (
    <div className="container mx-auto pt-16">
      <div className="text-right">
        <button className="p-2 bg-blue-600 text-white rounded mb-2" onClick={editEvent}>
          Edit Event
        </button>
      </div>

      <ReviewEventMainSection evt={evt} />
      <EventPlanningSection evt={evt} />
      <DescriptionSection evt={evt} />
      <SpeakersSection evt={evt} />
      <NotesSection evt={evt} />
      <AccessibilitySection evt={evt} />
    </div>
  )
}

export default EventDetailsPage;
