import React, { useState } from 'react';
import SearchResultViewSelector from 'components/elements/SearchResultViewSelector';
import EventListView from 'components/elements/EventListView';
import EventGridView from 'components/elements/EventGridView';
import EventCalendarView from 'components/elements/EventCalendarView';
import EventMapView from 'components/elements/EventMapView';

const styleClasses = {
  searchResultsHeading: 'font-bold text-lg mb-2 dark:text-slate-50',
}

export function SearchView({ events, viewName }) {
  switch(viewName) {
  case 'GRID':
    return <EventGridView events={events} />
  case 'LIST':
    return <EventListView events={events} />
  case 'CALENDAR':
    return <EventCalendarView events={events} />
  case 'MAP':
    return <EventMapView events={events} />
  default:
    return <EventGridView events={events} />
  }
}

function SearchEvents({ events }) {
  const [searchView, setSearchView] = useState('GRID');

  function updateSearchView(e) {
    setSearchView(e.target.id);
  }

  return (
    <div>
      <SearchResultViewSelector
        onChange={updateSearchView}
        selectedView={searchView}
      />

      <div>
        <h1 className={styleClasses.searchResultsHeading}>
          Search Results
        </h1>
      </div>

      <div>
        <SearchView events={events} viewName={searchView} />
      </div>
    </div>
  )
}

export default SearchEvents;
