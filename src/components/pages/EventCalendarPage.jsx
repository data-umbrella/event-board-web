import React from 'react';
import SearchForm from 'components/elements/SearchForm';
import { useSearchEvents } from 'hooks/events';
import EventCalendarView from 'components/elements/EventCalendarView';

function EventCalendarPage() {
  const [searchResultEvents, setSearchFilters] = useSearchEvents();

  return (
    <div className="mt-4 mb-12">
      <div>
        <SearchForm handleFormSubmit={setSearchFilters} />
      </div>

      <div className="px-6">
        <EventCalendarView events={searchResultEvents} />
      </div>
    </div>
  )
}

export default EventCalendarPage;
