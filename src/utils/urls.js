import defaultThumbNail from 'assets/thumbnail.png';

export function isValidURL(string) {
  /* eslint-disable */
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
  /* eslint-enable */
  return (res !== null);
}

export function imageUrlForEvent(eventData) {
  if (eventData.imageUrl) return eventData.imageUrl;

  return eventData.imageFile === '' || !eventData.imageFile
    ? defaultThumbNail
    : eventData.imageFile
}
