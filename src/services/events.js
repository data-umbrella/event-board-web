import queryString from "query-string";
import moment from "moment";
import { parseAPIJSON } from "utils/api";
import { EVENTS_URL } from "constants/urls";
import { DEFAULT_DATE_FORMAT } from "constants/dates";
import camelcaseKeys from "camelcase-keys";

export function buildDateFields(searchFilters) {
  const startDate = moment(searchFilters.startDate).format(DEFAULT_DATE_FORMAT);
  const endDate = moment(searchFilters.endDate).format(DEFAULT_DATE_FORMAT);

  if (moment(startDate).isSame(moment(endDate))) {
    return { start_date: startDate };
  }

  return {
    start_date__gte: startDate,
    end_date__lte: endDate,
  }
}

export function calcuateOffset(page, pageSize) {
  return page === 1 ? 0 : ((pageSize * page) - pageSize);
}

export function fetchEventsForSearchFilters(searchFilters) {
  const query = queryString.stringify({
    event_type: searchFilters.eventType,
    region: searchFilters.region,
    search: searchFilters.search,
    tags: searchFilters.topic,
    price: searchFilters.price,
    language: searchFilters.language,
    limit: searchFilters.pageSize,
    published: true,
    offset: calcuateOffset(searchFilters.page, searchFilters.pageSize),
    ...buildDateFields(searchFilters),
  });

  return fetch(`${EVENTS_URL}?${query}`)
    .then((response) => response.json())
    .then((res) => {
      const { results, ...meta } = res;
      console.log(results);
      return { results: camelcaseKeys(results), ...meta };
    });
}

export function fetchEventResultsForSearchFilters(searchFilters) {
  return fetchEventsForSearchFilters(searchFilters).then((response) =>
    parseAPIJSON(response)
  );
}

export function fetchFeaturedEvents() {
  const query = queryString.stringify({
    featured: true,
    start_date__gte: moment().format(DEFAULT_DATE_FORMAT),
    start_date__lte: moment().add(5, "months").format(DEFAULT_DATE_FORMAT),
  });

  return fetch(`${EVENTS_URL}?${query}`)
    .then((response) => response.json())
    .then((json) => parseAPIJSON(json));
}
