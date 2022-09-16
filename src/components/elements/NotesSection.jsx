import React from 'react';
import { eventStyleClasses } from 'styles/events';

function NotesSection({ evt }) {
  if (!evt.notes) return

  return (
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <div className={eventStyleClasses.infoTextSection}>
        <h2 className="mb-2 rounded text-lg font-semibold">Volunteering: </h2>
        <p className="leading-7">{evt.volunteeringNotes}</p>
      </div>

      <div className={eventStyleClasses.infoTextSection}>
        <h2 className="mb-2 rounded text-lg font-semibold">Notes: </h2>
        <p className="leading-7">{evt.notes}</p>
      </div>
    </div>
  )
}

export default NotesSection;
