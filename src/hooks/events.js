import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3333';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      let json;

      if (localStorage.getItem(eventId)) {
        json = JSON.parse(localStorage.getItem(eventId));
      } else {
        const response = await fetch(`${API_URL}/events/${eventId}`);
        json = await response.json();
      }

      setEvent(json);
    }
    fetchEvent();
  }, [eventId]);

  return evt;
}
