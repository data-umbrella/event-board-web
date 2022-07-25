import { useState, useEffect } from 'react';
import moment from 'moment';

// Elements
import FeaturedEvents from 'components/elements/FeaturedEvents';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchEvents from 'components/elements/SearchEvents';
import SearchForm from 'components/elements/SearchForm';
import { useFeaturedEvents, useSearchEvents } from 'hooks/events';

// Constants
import { API_URL } from 'constants/urls';

function HomePage() {
  const featuredEvents = useFeaturedEvents();
  const [searchResultEvents, setSearchFilters] = useSearchEvents();

  function handleSearch (values) {
    setSearchFilters(values);
  }

  return (
    <div className="mb-10">
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchForm handleFormSubmit={handleSearch} />
      <SearchEvents events={searchResultEvents} />
    </div>
  )
}

export default HomePage;
