import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { sortByDate } from 'utils/dates';


const styleClasses = {
  tags: `
    bg-purple-500
    inline-block
    mr-1
    pl-2
    pr-2
    rounded
    text-white
  `
}

function formatEventTags(tags) {
  if (tags === null || tags === undefined) return [];

  return tags.trim().split(',').filter(tag => tag !== '');
}

function DateRange(event) {
  const dateStart = event.start.split(' ')[0]
  const dateEnd = event.end.split(' ')[0]

  if(dateStart === dateEnd) {
    return <p>{event.start.slice(0, -6) + ' - ' + event.end.substring(event.end.indexOf(' ') + 1)}</p>
  }
  return <p>{event.start + ' - ' + event.end}</p>
}


function EventsForMonth({ events }) {
  const sortedEvents = events.sort(sortByDate);

  
  return sortedEvents.map(evt => {
    const eventTags = formatEventTags(evt.tags);

    const dateStart = moment(evt.startDate).format('MMMM D, YYYY')
    const dateEnd = moment(evt.endDate).format('MMMM D, YYYY')

    return (
      <div key={`${evt.id}-${evt.eventName}`} className="border border-gray-300 bg-white dark:bg-du-indigo-900 dark:border-du-lightAqua mb-2 px-2 py-2 rounded">
        <div className="grid grid-cols-3 sm:flex sm:flex-row-reverse sm:space-bet sm:place-content-between">
          <span className="text-left truncate text-sm sm:text-base sm:col-start-2">
            <DateRange 
              start={dateStart}
              end={dateEnd}
            />
          </span>
          <span className="text-center sm:text-right text-du-charcoal-gray dark:text-du-gray">
            {eventTags.map(tag => (
              <span key={tag} className={styleClasses.tags}>{tag}</span>
            ))}
          </span>
          <Link
            to={`/events/${evt.id}/details`}
            className="text-du-purple-500 dark:text-du-lightPurple underline underline-offset-4 font-medium decoration-2 truncate"
          >
            <span className="pl-2">
              { evt.eventName }
            </span>
          </Link>

        </div>
      </div>
    )
  })
}

export default EventsForMonth;
