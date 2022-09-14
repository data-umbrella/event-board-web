import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { sortByDate } from 'utils/dates';
 
function EventsForMonth({ events }) {
  const sortedEvents = events.sort(sortByDate);

  return sortedEvents.map(evt => {
    return (
      <div key={`${evt.id}-${evt.eventName}`} className="bg-white mb-2 px-2 py-2 rounded border border-gray-300">
        <div className="grid grid-cols-2">
          <span className="text-left">
            <Link
              to={`/events/${evt.id}/details`}
              className="text-du-purple-500 underline underline-offset-4 font-medium decoration-2"
            >
              { evt.eventName }
            </Link>
          </span>
          <span className="text-right">
            {evt.eventType}
            {moment(evt.startDate).format('MMMM D, YYYY')}
          </span>
        </div>
      </div>
    )
  })
}

export default EventsForMonth;
