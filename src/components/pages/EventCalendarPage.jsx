import React from 'react';
import SearchForm from 'components/elements/SearchForm';
import { useSearchEvents } from 'hooks/events';
import EventCalendarView from 'components/elements/EventCalendarView';
import EventListView from 'components/elements/EventListView';

function EventCalendarPage() {
  const [searchResultEvents, setSearchFilters, clearFilters] = useSearchEvents();

  return (
    <div className="mt-4 mb-12 md:px-6">
      <div>
        <SearchForm
          handleFormSubmit={setSearchFilters}
          clearFilters={clearFilters}
        />
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
