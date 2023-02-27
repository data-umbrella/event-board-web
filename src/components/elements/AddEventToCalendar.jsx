import React from 'react';
// import 'add-to-calendar-button';
import { atcb_action } from "add-to-calendar-button";
import calendarIcon from '../../assets/ui/calendarIcon.png';
// import customCss from '../../styles/calendar.css'

const calendars = {
  'Google': 'Google',
  'Yahoo': 'Yahoo!',
  'iCal': 'iCal', 
  'Outlook.com': 'Outlook'
}

function AddEventToCalendar() {
  const calendarKeys = Object.keys(calendars)

  const config = {
    name: "[Reminder] Test the Add to Calendar Button",
    description: "Check out the maybe easiest way to include Add to Calendar Buttons to your web projects:[br]→ [url]https://add-to-calendar-button.com/",
    startDate: "2023-03-02",
    startTime: "10:15",
    endTime: "23:30",
    options: ["Google|My custom label", "iCal"],
    timeZone: "America/Los_Angeles"
  };

  function handleClick() {
    atcb_action(config, document.getElementById('my-default-button'));
  }

  return (
    <section className="w-2/5 flex mb-10">
      <img src={calendarIcon} alt="calendarIcon" className="w-10 h-10"/>
      
      {calendarKeys.map( key => {

        return(
          <button
            id={`${key}`}
            key={`${key}`}
            style={{
              background: '#ffa255',
              color: '#000',
              padding: '8px 16px',
              height: 'fit-content',
              display: 'block',
              borderRadius: '21px'
            }}
            onClick={handleClick}
          >
            {calendars[key]}
          </button>
        )
      })}
    </section>
  );
}

// function AddEventToCalendar({ evt }) {
//   const calendarKeys = Object.keys(calendars)
//   return (
//     <section className="w-2/5 flex mb-10">
//       <img src={calendarIcon} alt="calendarIcon" className="w-10 h-10"/>
//       {calendarKeys.map(key => {
//         return (
//           <div key={key}>
//             <add-to-calendar-button
//               name={evt.eventName}
//               options={`${key}`}
//               location={evt.location}
//               startDate={evt.startDate}
//               endDate={evt.endDate}
//               startTime={evt.startTime}
//               endTime={evt.endTime}
//               timeZone={evt.timezone}
//               // customCss={customCss}
//               inline
//               hideBackground
//               hideIconButton
//               buttonsList
//               buttonStyle="flat"
//               size="2"
//               label={calendars[key]}
//             ></add-to-calendar-button>
//           </div>
//         )})}
//     </section>
//   )
// }

export default AddEventToCalendar;
