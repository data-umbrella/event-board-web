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

function dataURLtoFile(dataUrl, fileName) {
  var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {type:mime});
}

function ReviewEventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const evt = useEvent(eventId);

  async function handleSubmit () {
    const eventData = JSON.parse(localStorage.getItem(eventId));

    if (evt.id) {
      try {
        const imageFile = eventData.imageUrl ? dataURLtoFile(eventData.imageUrl, 'example.png') : null;

        if (imageFile) {
          eventData.image_file = imageFile;
        }

        console.log(eventData.image_file);

        await api('PUT', `events/${evt.id}/`, eventData);
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
