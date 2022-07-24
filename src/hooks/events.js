import { useEffect, useState } from 'react';
import { EVENTS_URL, API_URL } from 'constants/urls';
import camelcaseKeys from 'camelcase-keys';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      let json;

      if (localStorage.getItem(eventId)) {
        json = JSON.parse(localStorage.getItem(eventId));
      } else {
        try {
          const requestURL = `${EVENTS_URL}/${eventId}`;
          const response = await fetch(requestURL);
          json = await response.json();
        } catch (e) {
          console.log(e.message);
        }
      }

      const result = camelcaseKeys(json);
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
      setFeaturedEvents(json);
    }
    fetchFeaturedEvents();
  }, []);

  return featuredEvents;
}
