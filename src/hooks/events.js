import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3333';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`${API_URL}/events/${eventId}`);
      const json = await response.json();
      setEvent(json);
    }
    fetchEvent()
  }, [eventId]);

  return evt;
}
