// Elements
import React from "react";
import FeaturedEvents from "components/elements/FeaturedEvents";
import IntroductionSection from "components/elements/IntroductionSection";
import SearchEvents from "components/elements/SearchEvents";
import SearchForm from "components/elements/SearchForm";
import { useFeaturedEvents, useSearchEvents } from "hooks/events";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize") || 2;
  const page = searchParams.get("page") || 1;
  const featuredEvents = useFeaturedEvents();

  const [searchResultEvents, setSearchFilters, clearFilters, searchFilters] =
    useSearchEvents({
      pageSize,
      page,
    });

  function handlePageChange(page) {
    setSearchFilters({ ...searchFilters, page });
    setSearchParams({ ...searchFilters, page }, { preventScrollReset: true });
  }

  function handleSearch(values) {
    setSearchFilters(values);
  }

  const { results, ...meta } = searchResultEvents;

  return (
    <div className="mb-10">
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchForm handleFormSubmit={handleSearch} clearFilters={clearFilters} />
      <SearchEvents
        events={results || []}
        eventsMetadata={meta}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
