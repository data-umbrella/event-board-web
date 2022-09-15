import { API_URL } from 'constants/urls';
import { parseAPIJSON } from 'utils/api';
import queryString from 'query-string';
import moment from 'moment';

export function fetchEventsForSearchFilters(searchFilters) {
  const query = queryString.stringify({
    event_type: searchFilters.eventType,
    region: searchFilters.region,
    search: searchFilters.search,
    start_date__gte: moment(searchFilters.startDate).format('YYYY-MM-DD'),
    start_date__lte: moment(searchFilters.endDate).format('YYYY-MM-DD'),
    topic: searchFilters.topics,
    price: searchFilters.price,
    language: searchFilters.language,
  });
  
  return fetch(`${API_URL}/api/v1/events?${query}`)
    .then(response => response.json())
    .then(json => parseAPIJSON(json));
}
