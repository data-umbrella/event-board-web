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

function DateRange(event) {
  const dateStart = event.start.split(' ')[0]
  const dateEnd = event.end.split(' ')[0]

  if(dateStart === dateEnd) {
    return <p className="truncate">{event.start.slice(0, -6) + ' - ' + event.end.substring(event.end.indexOf(' ') + 1)}</p>
  }
  return <p className="truncate">{event.start + ' - ' + event.end}</p>
}

function RenderEventType(data) {
  const eventStyles = `inline-block mr-1 pl-2 pr-2 rounded bg-event-tags-${data.data} text-white`

  return <span className={eventStyles}>{data.data}</span>
}

function formatEventTags(tags) {
  if (tags === null || tags === undefined) return [];

  return tags.trim().split(',').filter(tag => tag !== '');
}

function EventsForMonth({ events }) {
  const sortedEvents = events.sort(sortByDate);

  
  return sortedEvents.map(evt => {
    const eventTags = formatEventTags(evt.tags);

    const dateStart = moment(evt.startDate).format('MMMM D, YYYY')
    const dateEnd = moment(evt.endDate).format('MMMM D, YYYY')

    return (
      <div key={`${evt.id}-${evt.eventName}`} className="border border-gray-300 bg-white dark:bg-du-indigo-900 dark:border-du-lightAqua mb-2 px-2 py-2 rounded">
        <div className="grid grid-cols-3 sm:grid-cols-4">
          <Link
            to={`/events/${evt.id}/details`}
            className="text-du-purple-500 dark:text-du-lightPurple underline underline-offset-4 font-medium decoration-2 truncate"
          >
            <span className="pl-2">
              { evt.eventName }
            </span>
          </Link>
          <span className="text-sm text-center sm:col-start-3 sm:text-base sm:text-right text-du-charcoal-gray dark:text-du-gray">
            <span className="hidden sm:inline-block">
              {eventTags.map(tag => (
                <span key={tag} className={styleClasses.tags}>{tag}</span>
              ))}
            </span>
            <span>
              <RenderEventType 
                data={evt.eventType}
              />
            </span>
          </span>
          <span className="text-left text-sm sm:col-start-4 sm:text-base sm:text-right">
            <DateRange 
              start={dateStart}
              end={dateEnd}
            />
          </span>
        </div>
      </div>
    )
  })
}

export default EventsForMonth;
