import IntroductionSection from 'components/elements/IntroductionSection';
import SearchInputGroup from 'components/elements/SearchInputGroup';
import FeaturedEvents from 'components/elements/FeaturedEvents';
import SearchEvents from 'components/elements/SearchEvents';
import { MOCK_EVENTS } from 'constants/events';

function HomePage() {
  const searchResultEvents = MOCK_EVENTS;
  const featuredEvents = MOCK_EVENTS.slice(0, 3);

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
