import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { truncate } from 'utils/strings';
import { formatEventsForCalendar } from 'utils/events';

// TODO: Investigate using this plugins.
// import FullCalendar, { formatDate } from '@fullcalendar/react';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

function EventContent({ eventInfo }) {
  const navigate = useNavigate();

  function handleNavigate () {
    navigate(`/events/${eventInfo.event.id}/details`);
  }

  return (
    <div className="w-full bg-blue-600" onClick={handleNavigate}>
      <div className="whitespace-normal text-xs">
        <b className="mr-1">{eventInfo.timeText}</b>
        { truncate(eventInfo.event.title, 60) }
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return <EventContent eventInfo={eventInfo} />
}

function EventCalendarView({ events }) {
  const calendarEvents = formatEventsForCalendar(events);

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={calendarEvents}
      eventContent={renderEventContent}
    />
  )
}

export default EventCalendarView;
