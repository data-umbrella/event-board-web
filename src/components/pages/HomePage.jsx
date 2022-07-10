import { useState, useEffect } from 'react';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchInputGroup from 'components/elements/SearchInputGroup';
import FeaturedEvents from 'components/elements/FeaturedEvents';
import SearchEvents from 'components/elements/SearchEvents';
import { MOCK_EVENTS } from 'constants/events';

function HomePage() {
  const searchResultEvents = MOCK_EVENTS;
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    async function fetchFeaturedEvents() {
      const response = await fetch(`http://localhost:3333/events?featured=true`);
      const json = await response.json();
      console.log(json)
      setFeaturedEvents(json);
    }
    fetchFeaturedEvents();
  }, []);

  return (
    <div>
      <IntroductionSection />
      <FeaturedEvents events={featuredEvents} />
      <SearchInputGroup />
      <SearchEvents events={searchResultEvents} />
    </div>
  )
}

export default HomePage;
