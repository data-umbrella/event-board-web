import { useEffect, useState } from 'react';
import { API_URL } from 'constants/urls';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      let json;

      if (localStorage.getItem(eventId)) {
        json = JSON.parse(localStorage.getItem(eventId));
      } else {
        try {
          const requestURL = `${API_URL}/events/${eventId}`
          const response = await fetch(requestURL);
          json = await response.json();
        } catch (e) {
          console.log(e.message);
        }
      }

      setEvent(json);
    }
    fetchEvent();
  }, [eventId]);

  return evt;
}
