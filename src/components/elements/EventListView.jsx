import React from 'react';
import EventsForMonth from 'components/elements/EventsForMonth';
import { groupEventsByMonth } from 'utils/events';

function EventListView({ events }) {
  const groupedEvents = groupEventsByMonth(events);

  return (
    <div className="mt-10">
      {Object.keys(groupedEvents).map(month => {
        return (
          <div key={month} className="mb-6">
            <h1 className="mb-2 text-2xl font-semibold">{month}</h1>
            <EventsForMonth events={groupedEvents[month]} />
          </div>
        )
      })}
    </div>
  )
}

export default EventListView;
