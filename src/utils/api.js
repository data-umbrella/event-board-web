import camelcaseKeys from 'camelcase-keys';

export function parseAPIJSON(jsonPayload) {
  let results;

  if (Array.isArray(jsonPayload)) {
    results = jsonPayload;
  } else {
    results = jsonPayload.results;
  }

  return camelcaseKeys(results);
}
