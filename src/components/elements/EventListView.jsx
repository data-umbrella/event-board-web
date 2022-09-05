import React from 'react';
import logo from 'assets/thumbnail.png';
import moment from 'moment';
import EventsForMonth from 'components/elements/EventsForMonth';
import { groupEventsByMonth } from 'utils/events';

function EventListView({ events }) {
  const groupedEvents = groupEventsByMonth(events);

  return (
    <div className="mt-10">
      {Object.keys(groupedEvents).map(month => {
        return (
          <div key={month} className="mb-6">
            <h1 className="text-lg font-semibold mb-1">{month}</h1>
            <EventsForMonth events={groupedEvents[month]} />
          </div>
        )
      })}
    </div>
  )
}

export default EventListView;
