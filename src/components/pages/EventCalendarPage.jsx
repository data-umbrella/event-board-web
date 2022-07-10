import React from 'react'
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
// import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'

import { CALENDAR_EVENTS } from 'constants/events';

function EventContent({ eventInfo }) {
  const navigate = useNavigate();

  function handleNavigate () {
    navigate(`/events/${eventInfo.event.id}/details`);
  }

  return (
    <div onClick={handleNavigate}>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return <EventContent eventInfo={eventInfo} />
}

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }

// class EventCalendarPage extends React.Component {
//
//   state = {
//     weekendsVisible: true,
//     currentEvents: []
//   }
//
//   render() {
//     return (
//       <div className='demo-app'>
//         {this.renderSidebar()}
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.state.weekendsVisible}
//             initialEvents={INITIAL_EVENTS}
//             select={this.handleDateSelect}
//             eventContent={renderEventContent}
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents}
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//           />
//         </div>
//       </div>
//     )
//   }
//
//   renderSidebar() {
//     return (
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//           </ul>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//             toggle weekends
//           </label>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({this.state.currentEvents.length})</h2>
//           <ul>
//             {this.state.currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
//   }
//
//   handleWeekendsToggle = () => {
//     this.setState({
//       weekendsVisible: !this.state.weekendsVisible
//     })
//   }
//
//   handleDateSelect = (selectInfo) => {
//     let title = prompt('Please enter a new title for your event')
//     let calendarApi = selectInfo.view.calendar
//
//     calendarApi.unselect() // clear date selection
//
//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       })
//     }
//   }
//
//   handleEventClick = (clickInfo) => {
//     if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }
//
//   handleEvents = (events) => {
//     this.setState({
//       currentEvents: events
//     })
//   }
//
// }

function EventCalendarPage() {
  return (
    <div className="mt-4">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={CALENDAR_EVENTS}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default EventCalendarPage;
