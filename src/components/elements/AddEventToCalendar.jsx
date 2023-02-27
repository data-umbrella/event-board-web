import React from 'react';
import { atcb_action } from "add-to-calendar-button";
import calendarIcon from '../../assets/ui/calendarIcon.png';

const calendars = {
  'Google': 'Google',
  'Yahoo': 'Yahoo!',
  'iCal': 'iCal', 
  'Outlook.com': 'Outlook'
}

function CalendarBtn({ calendar, evt }) {

  function handleClick() {
    atcb_action(config, document.getElementById({ calendar }));
  }
  const config = {
    name: evt.eventName,
    description: evt.description,
    startDate: evt.startDate,
    endDate: evt.endDate,
    startTime: evt.startTime,
    endTime: evt.endTime,
    location: evt.location,
    timeZone: evt.timeZone,
    options: [calendar],
    buttonStyle:"flat",
  };

  return(
    <button
      id={`${ calendar }`}
      className="px-3 text-xl font-normal underline dark:text-white"
      onClick={handleClick}
    >
      {calendars[calendar]}
    </button>
  )
}

function AddEventToCalendar({ evt }) {
  const calendarKeys = Object.keys(calendars)

  return (
    <section className="w-2/5 flex mb-10 gap-2 content-center items-center">
      <img src={calendarIcon} alt="calendarIcon" className="w-10 h-10 dark:text-whitet"/>   
      {calendarKeys.map( (calendar, i) => {
        return(
          <div key={i}>
            <CalendarBtn calendar={calendar} evt={evt}/>
          </div>
        )
      })}
    </section>
  );
}

export default AddEventToCalendar;
