import React from 'react';
import SearchForm from 'components/elements/SearchForm';
import { useSearchEvents } from 'hooks/events';
import EventCalendarView from 'components/elements/EventCalendarView';
import EventListView from 'components/elements/EventListView';
import { useSearchParams } from 'react-router-dom';

function EventCalendarPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize") || 20;
  const page = searchParams.get("page") || 1;

  const [searchResultEvents, setSearchFilters, clearFilters, searchFilters] =
    useSearchEvents({
      pageSize,
      page,
    });

  const events = searchResultEvents.results || [];

  return (
    <div className="mt-4 mb-12 md:px-6">
      <div>
        <SearchForm
          handleFormSubmit={setSearchFilters}
          clearFilters={clearFilters}
        />
      </div>

      <div className="hidden md:block">
        <EventCalendarView events={events} />
      </div>

      <div>
        <EventListView events={events} />
      </div>
    </div>
  )
}

export default EventCalendarPage;
