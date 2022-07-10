import { useEffect, useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';
import { eventStyleClasses } from 'styles/events';

function DescriptionSection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Description: </h2>
      <p className="leading-7">{evt.description}</p>
    </div>
  )
}

function SpeakersSection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Speakers: </h2>
      <p className="leading-7">
        {evt.speakers.map(speaker => {
          return <span key={speaker} className="mr-6">{speaker}</span>
        })}
      </p>
    </div>
  )
}

function NotesSection({ evt }) {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <div className={eventStyleClasses.infoTextSection}>
        <h2 className="font-semibold text-lg mb-2 rounded">Volunteering: </h2>
        <p className="leading-7">{evt.volunteeringNotes}</p>
      </div>

      <div className={eventStyleClasses.infoTextSection}>
        <h2 className="font-semibold text-lg mb-2 rounded">Notes: </h2>
        <p className="leading-7">{evt.notes}</p>
      </div>
    </div>
  )
}

function AccessibilitySection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Accessibility: </h2>
      <div className="grid grid-cols-2">
        {evt.accessibilityDetails.map(detail => {
          return <div key={detail} className="mr-6 mb-2">{detail}</div>
        })}
      </div>
    </div>
  )
}

function EventPage() {
  const [evt, setEvent] = useState();
  const navigate = useNavigate();

  const { eventId } = useParams();
  // const evt = MOCK_EVENT;

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`http://localhost:3333/events/${eventId}`)
      const json = await response.json();

      setEvent(json);
    }
    fetchEvent()
  }, [eventId]);

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
      <DescriptionSection evt={evt} />
      <SpeakersSection evt={evt} />
      <NotesSection evt={evt} />
      <AccessibilitySection evt={evt} />
    </div>
  )
}

export default EventPage;
