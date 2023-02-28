import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';
import EventPlanningSection from 'components/elements/EventPlanningSection';
import AddEventToCalendar from 'components/elements/AddEventToCalendar';
import AccessibilitySection from 'components/elements/AccessibilitySection';
import DescriptionSection from 'components/elements/DescriptionSection';
import SpeakersSection from 'components/elements/SpeakersSection';
import NotesSection from 'components/elements/NotesSection';
import PageLoader from 'components/elements/PageLoader';
import EditEventButton from 'components/elements/EditEventButton';
import CopyEventLink from 'components/elements/CopyEventLink';
import { useEvent } from 'hooks/events';

function EventDetailsPage() {
  const { eventId } = useParams();
  const evt = useEvent(eventId);

  if (!evt) return <PageLoader />

  return (
    <div className="container mx-auto pt-16 pb-10 dark:bg-du-deepPurple">
      <ReviewEventMainSection evt={evt} />
      <EventPlanningSection evt={evt} />
      <div className="flex flex-row justify-between">
        <AddEventToCalendar evt={evt} />
        <CopyEventLink />
      </div>
      <DescriptionSection evt={evt} />
      <SpeakersSection evt={evt} />
      <NotesSection evt={evt} />
      <AccessibilitySection evt={evt} />
      <EditEventButton evt={evt} />
    </div>
  )
}

export default EventDetailsPage;
