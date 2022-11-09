import { EVENTS_URL } from "constants/urls";
import camelcaseKeys from "camelcase-keys";
import moment from "moment";
import { useEffect, useState } from "react";
import { arrayifyTags } from "utils/strings";
import {
  fetchEventResultsForSearchFilters,
  fetchFeaturedEvents,
} from "services/events";
import { DEFAULT_DATE_FORMAT } from "constants/dates";

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
    async function triggerRequest() {
      const events = await fetchFeaturedEvents();
      setFeaturedEvents([...events]);
    }
    triggerRequest();
  }, []);

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
    async function fetchSearchEvents() {
      const result = await fetchEventResultsForSearchFilters(searchFilters);
      setSearchResultEvents(result);
    }
    fetchSearchEvents();
  }, [searchFilters]);

  return [
    searchResultEvents,
    handleSearchFiltersChange,
    clearFilters,
    searchFilters,
  ];
}
