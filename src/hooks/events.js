import { EVENTS_URL } from 'constants/urls';
import camelcaseKeys from 'camelcase-keys';
import moment from 'moment';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { arrayifyTags } from 'utils/strings';
import {
  fetchEventsForSearchFilters,
  fetchFeaturedEvents,
} from 'services/events';
import { DATE_PICKER_STRING_FORMAT, DEFAULT_DATE_FORMAT } from 'constants/dates';
import { useSearchParams } from 'react-router-dom';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    fetchEvent();
  }, [eventId]);

  async function fetchEvent() {
    let json;
    let requestURL;
    let response;

    try {
      requestURL = `${EVENTS_URL}/${eventId}/`;
      response = await fetch(requestURL);
      json = await response.json();
    } catch (e) {
      throw new Error('Fetching the events failed.')
    }

    const result = camelcaseKeys(json);
    result.tags = arrayifyTags(result.tags);
    result.hashTag = arrayifyTags(result.hashTag);
    result.speakers = arrayifyTags(result.speakers);
    result.accessibilityOptions = arrayifyTags(result.accessibilityOptions);
    
    // NOTE: This is a temporary fix for the API returning the image URL in the 
    // `image_file` field. This should be removed once the API is fixed.
    if (result.imageFile) {
      result.imageUrl = result.imageFile;
      result.imageFile = null;
    }

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

export function useSearchEvents() {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get('pageSize') || 20;
  const page = searchParams.get('page') || 1;
  const startDate = searchParams.get('startDate') || moment().subtract(2, 'weeks').format(DATE_PICKER_STRING_FORMAT);
  const endDate = searchParams.get('endDate') || moment().add(6, 'months').format(DATE_PICKER_STRING_FORMAT);
  const search = searchParams.get('search') 

  const [searchFilters, setSearchFilters] = useState({
    startDate,
    endDate,
    pageSize,
    page,
    search
  });
  const [searchResultEvents, setSearchResultEvents] = useState([]);

  function handleSearchFiltersChange(newSearchFilters) {
    const newFilters = {
      ...newSearchFilters,
      pageSize,
      startDate: moment(newSearchFilters.startDate).format(DATE_PICKER_STRING_FORMAT),
      endDate: moment(newSearchFilters.endDate).format(DATE_PICKER_STRING_FORMAT),
    }
    setSearchFilters({ ...newFilters });
    // NOTE: preventResetScroll is not working as expected.
    // setSearchParams({ ...newFilters }, { preventResetScroll: true });
    const urlParams = queryString.stringify({
      ...newFilters,
      startDate: moment(newSearchFilters.startDate).format(DEFAULT_DATE_FORMAT),
      endDate: moment(newSearchFilters.endDate).format(DEFAULT_DATE_FORMAT),
    });

    window.history.replaceState(null, null, `?${urlParams}`);
  }

  function clearFilters() {
    const clearedFilters = {
      page: 1,
      pageSize: 20,
      startDate: moment().subtract(2, 'weeks').format(DATE_PICKER_STRING_FORMAT),
      endDate: moment().add(5, 'months').format(DATE_PICKER_STRING_FORMAT),
      search: '',
    }

    setSearchFilters({ ...clearedFilters });

    // NOTE: preventResetScroll is not working as expected.
    const urlParams = queryString.stringify({
      ...clearedFilters,
      startDate: moment(clearedFilters.startDate).format(DEFAULT_DATE_FORMAT),
      endDate: moment(clearedFilters.endDate).format(DEFAULT_DATE_FORMAT),
    });
    window.history.replaceState(null, null, `?${urlParams}`);
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
