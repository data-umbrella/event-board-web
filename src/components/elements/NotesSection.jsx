import React from 'react';
import { eventStyleClasses } from 'styles/events';

function NotesSection({ evt }) {
  return (
    <div>
      {evt.eventNotes && (
        <div className={eventStyleClasses.infoTextSection}>
          <h2 className="font-semibold text-lg mb-2 rounded">Notes: </h2>
          <p className="leading-7">{evt.eventNotes}</p>
        </div>
      )}
      {evt.volunteeringNotes && (
        <div className={eventStyleClasses.infoTextSection}>
          <h2 className="font-semibold text-lg mb-2 rounded">Volunteering: </h2>
          <p className="leading-7">{evt.volunteeringNotes}</p>
        </div>
      )}
    </div>
  )
}

export default NotesSection;
