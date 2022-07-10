import { useEffect, useState } from 'react';

export function useEvent(eventId) {
  const [evt, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`http://localhost:3333/events/${eventId}`);
      const json = await response.json();
      setEvent(json);
    }
    fetchEvent()
  }, []);

  return evt;
}
