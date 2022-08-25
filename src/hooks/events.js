import { API_URL, EVENTS_URL } from 'constants/urls';
import camelcaseKeys from 'camelcase-keys';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { arrayifyTags } from 'utils/strings';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      let json;

      if (sessionStorage.getItem(eventId)) {
        json = JSON.parse(sessionStorage.getItem(eventId));
      } else {
        try {
          const requestURL = `${EVENTS_URL}/${eventId}/`;
          const response = await fetch(requestURL);
          json = await response.json();
        } catch (e) {
          // TODO: Add graceful error states
          // console.error(e.message);
        }
      }

      const result = camelcaseKeys(json);
      result.tags = arrayifyTags(result.tags);
      result.speakers = arrayifyTags(result.speakers);
      result.accessibilityOptions = arrayifyTags(result.accessibilityOptions);

      setEvent(result);
    }
    fetchEvent();
  }, [eventId]);

  return evt;
}

export function useFeaturedEvents() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    async function fetchFeaturedEvents() {
      const response = await fetch(`${API_URL}/api/v1/events?featured=true`);
      const json = await response.json();
      const result = camelcaseKeys(json);
      setFeaturedEvents(result);
    }
    fetchFeaturedEvents();
  }, []);

  return featuredEvents;
}


export function buildSearchEventsQueryString(data) {
  const dateQuery = `start_date__gte=${data.startDate}&start_date__lte=${data.endDate}`;
  const fullTextQuery = `search=${data.search}${data.topicQuery}`;

  return `${API_URL}/api/v1/events?${fullTextQuery}&${dateQuery}&published=true`;
}

export function useSearchEvents() {
  const [searchFilters, setSearchFilters] = useState({
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().add(5, 'months').format('YYYY-MM-DD'),
    search: ''
  });
  const [searchResultEvents, setSearchResultEvents] = useState([]);

  useEffect(() => {
    const { topic } = searchFilters;
    const startDate = moment(searchFilters.startDate).format('YYYY-MM-DD');
    const endDate = moment(searchFilters.endDate).format('YYYY-MM-DD');
    const topicQuery = topic ? `,${topic}` : '';
    const data = { startDate, endDate, topicQuery };

    async function fetchSearchEvents() {
      const url = buildSearchEventsQueryString(data);
      const response = await fetch(url);
      const json = await response.json();
      const result = camelcaseKeys(json);
      setSearchResultEvents(result.slice(0, 10));
    }
    fetchSearchEvents();
  }, [searchFilters]);

  return [searchResultEvents, setSearchFilters];
}
