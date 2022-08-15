import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
// import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { truncate } from 'utils/strings';

function EventContent({ eventInfo }) {
  const navigate = useNavigate();

  function handleNavigate () {
    navigate(`/events/${eventInfo.event.id}/details`);
  }

  return (
    <div className="bg-blue-300 w-full" onClick={handleNavigate}>
      <div className="text-xs whitespace-normal">
        <b className="mr-1">{eventInfo.timeText}</b>{truncate(eventInfo.event.eventName, 60)}
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return <EventContent eventInfo={eventInfo} />
}

function EventCalendarView({ events }) {
  const calendarEvents = events.map(evt => {
    return { id: evt.id, start: evt.startDate, title: evt.eventName };
  });

  return (
    <div className="mt-4">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={calendarEvents}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default EventCalendarView;
