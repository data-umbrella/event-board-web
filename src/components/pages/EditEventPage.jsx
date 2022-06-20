import { useParams } from 'react-router-dom';

function EditEventPage() {
  const { eventId } = useParams();

  return (
    <div>
      <h1>Edit Event #{eventId}</h1>
    </div>
  )
}

export default EditEventPage;
