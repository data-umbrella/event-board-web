import React from 'react';
import { eventStyleClasses } from 'styles/events';

function ReviewEventActionsSection({ evt, handleSubmit, editEvent }) {
  return (
    <div className="text-right">
      {
        evt.submitted ? (
          <button
            className="p-2 underline underline-offset-4 text-xl dark:text-white text-right"
            onClick={editEvent}
          >
            Edit Event
          </button>
        ) : (
          <div className="grid grid-cols-2 w-1/2 float-right gap-1">
            <button
              className="p-2 underline underline-offset-4 text-xl dark:text-white"
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
    </div>
  )
}

export default ReviewEventActionsSection;
