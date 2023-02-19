import React from 'react';
import 'add-to-calendar-button';
import calendarIcon from '../../assets/ui/calendarIcon.png';

const calendars = {
  'Google': 'Google',
  'Yahoo': 'Yahoo!',
  'iCal': 'iCal', 
  'Outlook.com': 'Outlook'
}

function AddEventToCalendar({ evt }) {
  const calendarKeys = Object.keys(calendars)
  return (
    <section className="w-2/5 flex mb-10">
      <img src={calendarIcon} alt="calendarIcon" className="w-10 h-10"/>
      {calendarKeys.map(key => {
        return (
          <div key={key}>
            <add-to-calendar-button
              name={evt.eventName}
              options={`${key}`}
              location={evt.location}
              startDate={evt.startDate}
              endDate={evt.endDate}
              startTime={evt.startTime}
              endTime={evt.endTime}
              timeZone={evt.timezone}
              customCss={customCss}
              inline
              hideBackground
              hideIconButton
              buttonsList
              buttonStyle="flat"
              size="2"
              label={calendars[key]}
            ></add-to-calendar-button>
          </div>
        )})}
    </section>
  )
}

export default AddEventToCalendar;
