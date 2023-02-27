import React from 'react';
import { atcb_action } from "add-to-calendar-button";
import { FaRegCalendarPlus } from 'react-icons/fa'

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
      className="px-3 xs:text-lg md:text-xl font-normal underline dark:text-white"
      onClick={handleClick}
    >
      {calendars[calendar]}
    </button>
  )
}

function AddEventToCalendar({ evt }) {
  const calendarKeys = Object.keys(calendars)

  return (
    <section className="flex flex-col md:flex-row mb-10 gap-2 md:gap-6 justify-center content-center md:justify-start">
      <FaRegCalendarPlus className="h-8 md:h-20 w-8 md:h-20 ml-2 dark:text-white self-center md:self-start"/>
      <div className="flex flex-row self-center md:self-startr">
        {calendarKeys.map( (calendar, i) => {
          return(
            <div key={i}>
              <CalendarBtn calendar={calendar} evt={evt}/>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default AddEventToCalendar;
