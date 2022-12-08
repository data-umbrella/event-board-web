import camelcaseKeys from 'camelcase-keys';
import { iOSPlatform } from 'utils/devices';
import { DEFAULT_HEADERS } from 'constants/api';
import { getUserToken } from 'utils/sessions';

export function buildAuthenticatedHeaders() {
  const headers = { ...DEFAULT_HEADERS };
  const userToken = getUserToken();
  headers['Authorization'] = `Token ${userToken}`;
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
