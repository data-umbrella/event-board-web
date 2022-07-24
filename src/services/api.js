import { API_URL } from 'constants/urls';
import snakecaseKeys from 'snakecase-keys';

const headers = {
  'Content-Type': 'application/json',
}

const EVENT_ATTRIBUTES = [
  'title',
  'description',
  'featured',
  'hash_tag',
  'conference_name',
  'organization_name',
  // 'acronym',
  // 'event_url',
  // 'organization_url',
  // 'startDate',
  // 'endDate',
  // 'startTime',
  // 'endtime',
  // 'location',
  // 'region',
  // 'in_person',
  // 'virtual',
  // 'cfp_due_date',
  // 'language',
  // 'code_of_conduct_url',
]

export async function api(method, resource, body) {
  let json;

  const payload = {}
  const formattedBody = snakecaseKeys(body);

  EVENT_ATTRIBUTES.forEach(attributeKey => {
    payload[attributeKey] = formattedBody[attributeKey];
  });

  try {
    const response = await fetch(`${API_URL}/api/v1/${resource}`, {
      method,
      headers,
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    json = await response.json();

    if (response.status === 400) {
      throw(new Error('Bad Request'));
    }
  } catch (e) {
    throw(e.message);
  }

  return json;
}
