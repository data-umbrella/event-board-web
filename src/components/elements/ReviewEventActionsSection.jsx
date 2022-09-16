import React from 'react';
import { eventStyleClasses } from 'styles/events';

function ReviewEventActionsSection({ handleSubmit, editEvent }) {
  return (
    <div className="float-right grid w-1/2 grid-cols-2 gap-1">
      <button
        className="p-2 text-xl underline underline-offset-4"
        onClick={editEvent}
      >
        Edit Event
      </button>
      <button
        className={eventStyleClasses.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default ReviewEventActionsSection;
