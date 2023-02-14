// Elements
import React from 'react';
import FeaturedEvents from 'components/elements/FeaturedEvents';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchEvents from 'components/elements/SearchEvents';
import SearchForm from 'components/elements/SearchForm';
import { useFeaturedEvents, useSearchEvents } from 'hooks/events';

function HomePage() {
  const featuredEvents = useFeaturedEvents();

  const [
    searchResultEvents,
    setSearchFilters,
    clearFilters,
    searchFilters
  ] = useSearchEvents({});

  function handlePageChange(page) {
    setSearchFilters({ ...searchFilters, page });
  }

  function handleSearch(values) {
    setSearchFilters(values);
  }

  const { results, ...meta } = searchResultEvents;

  return (
    <div className="mb-10">
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchForm
        handleFormSubmit={handleSearch}
        clearFilters={clearFilters}
        startDate={searchFilters.startDate}
        endDate={searchFilters.endDate}
        eventType={searchFilters.eventType}
        search={searchFilters.search}
        topic={searchFilters.topic}
        language={searchFilters.language}
        region={searchFilters.region}
        price={searchFilters.price}
      />
      <SearchEvents
        events={results || []}
        eventsMetadata={meta}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
