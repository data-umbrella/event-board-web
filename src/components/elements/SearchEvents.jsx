import { useState } from 'react';
import SearchResultViewSelector from 'components/elements/SearchResultViewSelector';
import EventListView from 'components/elements/EventListView';
import EventGridView from 'components/elements/EventGridView';
import EventCalendarView from 'components/elements/EventCalendarView';

const styleClasses = {
  searchResultsHeading: 'font-bold text-lg mb-2',
}

export function SearchView({ events, viewName }) {
  switch(viewName) {
  case 'GRID':
    return <EventGridView events={events} />
  case 'LIST':
    return <EventListView events={events} />
  case 'CALENDAR':
    return <EventCalendarView events={events} />
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

      <SearchView events={events} viewName={searchView} />
    </div>
  )
}

export default SearchEvents;
