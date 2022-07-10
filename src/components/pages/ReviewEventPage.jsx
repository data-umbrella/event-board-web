import { useParams, useNavigate } from 'react-router-dom';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';
import EventPlanningSection from 'components/elements/EventPlanningSection';
import AccessibilitySection from 'components/elements/AccessibilitySection';
import DescriptionSection from 'components/elements/DescriptionSection';
import SpeakersSection from 'components/elements/SpeakersSection';
import NotesSection from 'components/elements/NotesSection';
import { eventStyleClasses } from 'styles/events';
import { useEvent } from 'hooks/events';

function ReviewEventActionsSection({
  handleSubmit,
  editEvent,
}) {
  return (
    <div className="grid grid-cols-2 w-1/2 float-right gap-1">
      <button className="p-2 underline underline-offset-4 text-xl">Edit Event</button>
      <button
        className={eventStyleClasses.submitButton}
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  )
}

function ReviewEventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const evt = useEvent(eventId);

  async function handleSubmit () {
    const response = await fetch(`http://localhost:3333/events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ featured: true }),
    });

    const json = await response.json();

    if (response.status === 200) {
      navigate('/events/confirmation');
    } else {
      console.log("something wen't wrong", response, json);
    }
  }

  function editEvent () {

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
      />
    </div>
  )
}

export default ReviewEventPage;
