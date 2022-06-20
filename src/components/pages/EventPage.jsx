import { useParams } from 'react-router-dom';

function EventPage() {
  const { eventId } = useParams();

  return (
    <div>
      <h1>Event #{eventId}</h1>
    </div>
  )
}

export default EventPage;
