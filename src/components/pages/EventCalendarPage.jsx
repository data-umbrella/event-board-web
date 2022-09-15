import React from 'react';
import SearchForm from 'components/elements/SearchForm';
import { useSearchEvents } from 'hooks/events';
import EventCalendarView from 'components/elements/EventCalendarView';
import EventListView from 'components/elements/EventListView';

function EventCalendarPage() {
  const [searchResultEvents, setSearchFilters] = useSearchEvents();

  return (
    <div className="mt-4 mb-12 md:px-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 mt-12">Search Events</h2>
        <SearchForm handleFormSubmit={setSearchFilters} />
      </div>

      <div className="hidden md:block">
        <EventCalendarView events={searchResultEvents} />
      </div>

      <div>
        <EventListView events={searchResultEvents} />
      </div>
    </div>
  )
}

export default EventCalendarPage;
