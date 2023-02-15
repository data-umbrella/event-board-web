import React from 'react';
import 'add-to-calendar-button';

function AddEventToCalendar({ evt }) {
  return (
    <section className="grid md:grid-cols-2 gap-x-20 mb-10">
      <add-to-calendar-button
        name="Title"
        options="'Apple','Google','Yahoo','Outlook.com'"
        location="World Wide Web"
        startDate="2023-02-17"
        endDate="2023-02-17"
        startTime="10:15"
        endTime="23:30"
        timeZone="America/Los_Angeles"
      ></add-to-calendar-button>
    </section>
  )
}

export default AddEventToCalendar;
