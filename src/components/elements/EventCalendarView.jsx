import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { truncate } from 'utils/strings';
import { formatEventsForCalendar } from 'utils/events';
import ReactTooltip from 'react-tooltip';
import moment from 'moment/moment';


// TODO: Investigate using this plugins.
// import FullCalendar, { formatDate } from '@fullcalendar/react';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

function EventContent({ eventInfo }) {
  const formattedStart = moment(eventInfo.event._instance.range.start).format('MMM DD, YYYY h:mm A ')
  const formattedEnd = moment(eventInfo.event._instance.range.end).format('MMM DD, YYYY h:mm A ')
  const eventType = eventInfo.event.extendedProps.type
  const navigate = useNavigate();
  
  
  function handleNavigate () {

    navigate(`/events/${eventInfo.event.id}/details`);
  }
  return (
    <>
      <ReactTooltip id={`tip-${eventInfo.event.id}`} class="event-tooltip" 
        effect="solid" delayHide={1000} globalEventOff="click" getContent={() => {
          return (
  
            <>
              <div className="flex flex-row gap-2 justify-between items-center">
                <div className= "font-bold py-2">{eventInfo.event.title}</div>
                <div className={`h-5 w-5 flex rounded-md bg-event-tags-${eventType}`}></div>
              </div>
              <p className= "pb-4">{formattedStart} - {formattedEnd}</p>
              <div className="event-tooltip-navigate cursor-pointer" onClick={handleNavigate}>{"Go to Event Page >>>"}</div>
            </>)
        }}/>
    
      <div 
        className={`w-full bg-event-tags-${eventType} rounded-sm text-black font-bold`}  
        data-tip data-for={`tip-${eventInfo.event.id}`} 
        data-event-close="click" effect="solid" 
      >
        <div className="text-xs whitespace-normal">
          <b className="mr-1">{eventInfo.timeText}</b>
          { truncate(eventInfo.event.title, 60) }
        </div>
      </div>
    </>
  )
}

function renderEventContent(eventInfo) {
  return (
    <div>
      <EventContent eventInfo={eventInfo} />
    </div>
  )
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
