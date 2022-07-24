import { useState, useEffect } from 'react';
import moment from 'moment';

// Elements
import FeaturedEvents from 'components/elements/FeaturedEvents';
import IntroductionSection from 'components/elements/IntroductionSection';
import SearchEvents from 'components/elements/SearchEvents';
import SearchForm from 'components/elements/SearchForm';
import { useFeaturedEvents } from 'hooks/events';

// Constants
import { API_URL } from 'constants/urls';

function HomePage() {
  const [searchFilters, setSearchFilters] = useState({
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().add(5, 'months').format('YYYY-MM-DD'),
    search: '',
  });
  const featuredEvents = useFeaturedEvents();
  const [searchResultEvents, setSearchResultEvents] = useState([]);

  useEffect(() => {
    const { search } = searchFilters;
    // const startDate = moment(searchFilters.startDate).format('YYYY-MM-DD');
    // const endDate = moment(searchFilters.endDate).format('YYYY-MM-DD');

    async function fetchSearchEvents() {
      // const dateQuery = `startDate_gte=${startDate}&endDate_lte=${endDate}`;
      const fullTextQuery = `search=${search}`;
      const response = await fetch(
        `${API_URL}/api/v1/events?${fullTextQuery}`,
      );
      const json = await response.json();
      setSearchResultEvents(json);
    }
    fetchSearchEvents();
  }, [searchFilters]);

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
