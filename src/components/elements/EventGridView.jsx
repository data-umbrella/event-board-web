import React from 'react';
import SearchEventCard from 'components/elements/SearchEventCard';

const styles = {
  searchEventGroup: `
    gap-4
    grid
    md:grid-cols-4
    container
    mx-auto
    sm:grid-cols-none
    mb-10
  `,
}

function GridView({ events }) {
  return (
    <div className={`${styles.searchEventGroup}`}>
      {events.sort((evt) => evt.startDate).map(eventData => {
        return (
          <SearchEventCard key={eventData.id} eventData={eventData} />
        )
      })}
    </div>
  )
}

export default GridView;
