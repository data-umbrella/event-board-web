import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { sortByDate } from 'utils/dates';
import { EVENT_TYPES } from 'constants/events';

function formatTag(eventType) {
  for (const item of EVENT_TYPES) {
    if (eventType == item.label) return item.tag
  }
}

function EventsForMonth({ events }) {
  const sortedEvents = events.sort(sortByDate);

  return sortedEvents.map(evt => {
    evt["eventType"] = "Webinar";
    const eventTag = formatTag(evt.eventType)
    return (
      <div key={`${evt.id}-${evt.eventName}`} className="border border-gray-300 bg-white dark:bg-du-indigo-900 dark:border-du-lightAqua mb-2 px-2 py-2 rounded">
        <div className="grid grid-cols-2">
          <span className="text-left">
            <Link
              to={`/events/${evt.id}/details`}
              className="text-du-purple-500 dark:text-du-lightPurple underline underline-offset-4 font-medium decoration-2"
            >
              { evt.eventName }
            </Link>
          </span>
          <span className="text-right text-du-charcoal-gray dark:text-du-gray">
            <span className={`border ${eventTag} text-black py-1 px-2 rounded`}>
              {evt.eventType}
            </span>
            <span className="pl-2">
              {moment(evt.startDate).format('MMMM D, YYYY')}
            </span>
          </span>
        </div>
      </div>
    )
  })
}

export default EventsForMonth;
