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
  const pageSize = searchParams.pageSize || 2;
  const page = searchParams.page || 1;
  const featuredEvents = useFeaturedEvents();
  // TO DO: use a diff hook to get the raw data
  const [searchResultEvents, setSearchFilters, clearFilters] = useSearchEvents({
    pageSize,
    page,
  });

  function handleSearch(values) {
    setSearchFilters(values);
  }

  return (
    <div className="mb-10">
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchForm handleFormSubmit={handleSearch} clearFilters={clearFilters} />
      <SearchEvents events={searchResultEvents} />
    </div>
  );
}

export default HomePage;
