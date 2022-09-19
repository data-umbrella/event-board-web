// Elements
import React from 'react';
import FeaturedEvents from 'components/elements/FeaturedEvents';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchEvents from 'components/elements/SearchEvents';
import SearchForm from 'components/elements/SearchForm';
import { useFeaturedEvents, useSearchEvents } from 'hooks/events';

function HomePage() {
  const featuredEvents = useFeaturedEvents();
  const [searchResultEvents, setSearchFilters, clearFilters] = useSearchEvents();

  function handleSearch (values) {
    setSearchFilters(values);
  }

  return (
    <div className="mb-10">
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchForm
        handleFormSubmit={handleSearch}
        clearFilters={clearFilters}
      />
      <SearchEvents events={searchResultEvents} />
    </div>
  )
}

export default HomePage;
