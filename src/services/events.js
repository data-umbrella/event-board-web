import queryString from 'query-string';
import moment from 'moment';
import { parseAPIJSON } from 'utils/api';
import { EVENTS_URL } from 'constants/urls';
import { DEFAULT_DATE_FORMAT } from 'constants/dates';

export function fetchEventsForSearchFilters(searchFilters) {
  const query = queryString.stringify({
    event_type: searchFilters.eventType,
    region: searchFilters.region,
    search: searchFilters.search,
    start_date__gte: moment(searchFilters.startDate).format(DEFAULT_DATE_FORMAT),
    start_date__lte: moment(searchFilters.endDate).format(DEFAULT_DATE_FORMAT),
    tags: searchFilters.topic,
    price: searchFilters.price,
    language: searchFilters.language,
  });
  
  return fetch(`${EVENTS_URL}?${query}`)
    .then(response => response.json())
    .then(json => parseAPIJSON(json));
}

export function fetchFeaturedEvents() {
  const query = queryString.stringify({
    featured: true,
    start_date__gte: moment().format(DEFAULT_DATE_FORMAT),
    start_date__lte: moment().add(5, 'months').format(DEFAULT_DATE_FORMAT),
  });

  return fetch(`${EVENTS_URL}?${query}`)
    .then(response => response.json())
    .then(json => parseAPIJSON(json));
}
