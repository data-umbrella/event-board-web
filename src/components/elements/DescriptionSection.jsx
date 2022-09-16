import React from 'react';
import { eventStyleClasses } from 'styles/events';

function DescriptionSection({ evt }) {
  if (!evt.description) return

  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="mb-2 rounded text-lg font-semibold">Description: </h2>
      <p className="leading-7">{evt.description}</p>
    </div>
  )
}

export default DescriptionSection;
