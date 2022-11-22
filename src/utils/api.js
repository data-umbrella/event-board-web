import camelcaseKeys from 'camelcase-keys';
import { iOSPlatform } from 'utils/devices';
import { DEFAULT_HEADERS } from 'constants/api';
import { getUserToken } from 'utils/sessions';

export function buildAuthenticatedHeaders() {
  const headers = DEFAULT_HEADERS;

  if (iOSPlatform()) {
    headers['Authorization'] = `Token ${getUserToken()}`;
  }

  return headers;
}

export function parseAPIJSON(jsonPayload) {
  let results;

  if (Array.isArray(jsonPayload)) {
    results = jsonPayload;
  } else {
    results = jsonPayload.results;
  }

  return camelcaseKeys(results);
}
