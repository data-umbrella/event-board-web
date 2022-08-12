export function isValidURL(string) {
  /* eslint-disable */
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
  /* eslint-enable */
  return (res !== null);
}
