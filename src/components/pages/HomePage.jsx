// Elements
import React, { useEffect } from 'react';
import FeaturedEvents from 'components/elements/FeaturedEvents';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchEvents from 'components/elements/SearchEvents';
import SearchForm from 'components/elements/SearchForm';
import { useFeaturedEvents, useSearchEvents } from 'hooks/events';
import { useAuth } from 'hooks/authentication';

function HomePage() {
  const featuredEvents = useFeaturedEvents();
  const [searchResultEvents, setSearchFilters] = useSearchEvents();
  const auth = useAuth();

  useEffect(() => {
    auth.authenticateUser();
  }, []);

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
