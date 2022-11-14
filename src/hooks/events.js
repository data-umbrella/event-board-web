import { EVENTS_URL } from "constants/urls";
import camelcaseKeys from "camelcase-keys";
import moment from "moment";
import { useEffect, useState } from "react";
import { arrayifyTags } from "utils/strings";
import {
  fetchEventsForSearchFilters,
  fetchFeaturedEvents,
} from "services/events";
import { DEFAULT_DATE_FORMAT } from "constants/dates";

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    fetchEvent();
  }, [eventId]);

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
        throw new Error('Fetching the events failed.')
      }
    }
    const result = camelcaseKeys(json);
    result.tags = arrayifyTags(result.tags);
    result.speakers = arrayifyTags(result.speakers);
    result.accessibilityOptions = arrayifyTags(result.accessibilityOptions);

    setEvent(result);
  }

  return evt;
}

export function useFeaturedEvents() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    triggerRequest();
  }, []);

  async function triggerRequest() {
    const events = await fetchFeaturedEvents();
    setFeaturedEvents([...events]);
  }

  return featuredEvents;
}

export function useSearchEvents({ pageSize, page }) {
  const [searchFilters, setSearchFilters] = useState({
    startDate: moment().format(DEFAULT_DATE_FORMAT),
    endDate: moment().add(5, "months").format(DEFAULT_DATE_FORMAT),
    search: "",
    pageSize,
    page,
  });
  const [searchResultEvents, setSearchResultEvents] = useState([]);

  function handleSearchFiltersChange(newSearchFilters) {
    setSearchFilters({
      ...newSearchFilters,
      startDate: moment(newSearchFilters.startDate).format(DEFAULT_DATE_FORMAT),
      endDate: moment(newSearchFilters.endDate).format(DEFAULT_DATE_FORMAT),
    });
  }

  function clearFilters() {
    setSearchFilters({
      startDate: moment().format(DEFAULT_DATE_FORMAT),
      endDate: moment().add(5, "months").format(DEFAULT_DATE_FORMAT),
      search: "",
    });
  }

  useEffect(() => {
    fetchSearchEvents();
  }, [searchFilters]);

  async function fetchSearchEvents() {
    const result = await fetchEventsForSearchFilters(searchFilters);
    setSearchResultEvents(result);
  }

  return [
    searchResultEvents,
    handleSearchFiltersChange,
    clearFilters,
    searchFilters,
  ];
}
