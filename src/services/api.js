import { API_URL } from 'constants/urls';
import snakecaseKeys from 'snakecase-keys';

const headers = {
  'Content-Type': 'multipart/form-data',
}

const EVENT_ATTRIBUTES = [
  'acronym',
  'cfp_due_date',
  'code_of_conduct_url',
  'conference_name',
  'description',
  'endDate',
  'endtime',
  'event_url',
  'featured',
  'hash_tag',
  'in_person',
  'language',
  'location',
  'organization_name',
  'organization_url',
  'region',
  'startDate',
  'startTime',
  'title',
  'virtual',
  'event_type',
  'accessibility_options',
  'volunteer_notes',
  'event_notes',
  // 'image_file',
]

function stringifyTags(tags) {
  if (typeof tags === 'object') {
    return tags.join(',')
  } else if (typeof tags === 'string') {
    return tags;
  } else {
    return '';
  }
}

export async function api(method, resource, body) {
  let json;

  const payload = {};
  const formattedBody = snakecaseKeys(body);

  if (body.image_file) {
    formattedBody.image_file = body.image_file;
  }

  EVENT_ATTRIBUTES.forEach(attributeKey => {
    payload[attributeKey] = formattedBody[attributeKey];
  });

  payload.tags = stringifyTags(payload.tags);
  payload.speakers = stringifyTags(payload.speakers);
  payload.accessibility_options = stringifyTags(payload.accessibility_options);

  const formData = new FormData();

  EVENT_ATTRIBUTES.forEach(attributeKey => {
    if (payload[attributeKey]) {
      formData.append(attributeKey, payload[attributeKey]);
    }
  });

  if (body.image_file) {
    console.log(body.image_file)
    formData.append("image_file", body.image_file, body.image_file.name);
  }

  try {
    const response = await fetch(`${API_URL}/api/v1/${resource}`, {
      method,
      credentials: 'include',
      body: formData,
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
