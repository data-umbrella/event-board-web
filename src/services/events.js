import { dataURLtoImageFile } from 'utils/files';
import { DEFAULT_DATE_FORMAT } from 'constants/dates';
import { EVENT_ATTRIBUTES } from 'constants/events';
import { EVENTS_URL } from 'constants/urls';
import { formatDate } from 'utils/dates';
import { parseAPIJSON } from 'utils/api';
import { stringifyTags } from 'utils/strings';
import camelcaseKeys from 'camelcase-keys';
import moment from 'moment';
import queryString from 'query-string';
import snakecaseKeys from 'snakecase-keys';

export function buildDateFields(searchFilters) {
  const startDate = moment(searchFilters.startDate).format(DEFAULT_DATE_FORMAT);
  const endDate = moment(searchFilters.endDate).format(DEFAULT_DATE_FORMAT);

  if (moment(startDate).isSame(moment(endDate))) {
    return { start_date: startDate };
  }

  return {
    start_date__gte: startDate,
    end_date__lte: endDate,
  }
}

export function calcuateOffset(page, pageSize) {
  return page === 1 ? 0 : ((pageSize * page) - pageSize);
}

export function fetchEventsForSearchFilters(searchFilters) {
  const query = queryString.stringify({
    event_type: searchFilters.eventType,
    region: searchFilters.region,
    search: searchFilters.search,
    tags: searchFilters.topic,
    price: searchFilters.price,
    language: searchFilters.language,
    limit: searchFilters.pageSize,
    published: true,
    offset: calcuateOffset(searchFilters.page, searchFilters.pageSize),
    ...buildDateFields(searchFilters),
  });

  return fetch(`${EVENTS_URL}?${query}`)
    .then((response) => response.json())
    .then((res) => {
      const { results, ...meta } = res;
      return { results: camelcaseKeys(results), ...meta };
    });
}

export function fetchEventResultsForSearchFilters(searchFilters) {
  return fetchEventsForSearchFilters(searchFilters).then((response) =>
    parseAPIJSON(response)
  );
}

export function fetchFeaturedEvents() {
  const query = queryString.stringify({
    featured: true,
    start_date__gte: moment().format(DEFAULT_DATE_FORMAT),
    start_date__lte: moment().add(5, "months").format(DEFAULT_DATE_FORMAT),
  });

  return fetch(`${EVENTS_URL}?${query}`)
    .then((response) => response.json())
    .then((json) => parseAPIJSON(json));
}

export function buildFormDataObject(body) {
  body.tags = stringifyTags(body.tags);
  body.hash_tag = stringifyTags(body.hashTag);
  body.speakers = stringifyTags(body.speakers);
  body.accessibilityOptions = stringifyTags(body.accessibilityOptions);

  const formDataPayload = snakecaseKeys(body);
  formDataPayload.image_file = dataURLtoImageFile(body.imageFile, 'new-name.png');
  formDataPayload.start_date = formatDate(formDataPayload.start_date);
  formDataPayload.end_date = formatDate(formDataPayload.end_date);
  formDataPayload.cfp_due_date = formatDate(formDataPayload.cfp_due_date);
  formDataPayload.volunteering_notes = formDataPayload.volunteering_notes || '';
  formDataPayload.event_notes = formDataPayload.event_notes || '';
  formDataPayload.social_media_links = JSON.stringify(formDataPayload.social_media_links);

  return formDataPayload;
}

export function buildFormData(rawData) {
  const formData = new FormData();
  const formDataPayload = buildFormDataObject(rawData);

  EVENT_ATTRIBUTES.forEach(attributeKey => {
    if (attributeKey === 'image_file' && formDataPayload.image_file) {
      formData.append(
        'image_file',
        formDataPayload.image_file,
        formDataPayload.image_file.name
      );
    } else if (formDataPayload[attributeKey] || formDataPayload[attributeKey] === '') {
      formData.append(attributeKey, formDataPayload[attributeKey]);
    }
  });

  return formData;
}

// This function is used to make all the requests to the API.
// TODO: Refactor to use axios.
export async function makeRequest(url, options) {
  const response = await fetch(url, { credentials: 'include', ...options });
  const jsonObject = await response.json();

  if (![200, 201, 204].includes(response.status)) {
    throw(new Error('Bad Request'));
  }

  return jsonObject;
}

// This function creates a new event and uses theq
// buildFormData to build the data includes rich media.
export async function createEvent(body) {
  return makeRequest(EVENTS_URL, {
    method: 'POST',
    body: buildFormData(body)
  });
}

// This function updates the entire event and uses the
// buildFormData to build the data includes rich media.
export async function updateEvent(id, body) {
  return makeRequest(`${EVENTS_URL}/${id}/`, {
    method: 'PUT',
    body: buildFormData(body)
  });
}

// This function only patches the submitted field
// so, we can just use JSON to send the data.
export async function submitEvent(id) {
  return makeRequest(`${EVENTS_URL}/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ submitted: true }),
  });
}
