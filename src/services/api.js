import { EVENT_ATTRIBUTES } from 'constants/events';
import { API_URL } from 'constants/urls';
import snakecaseKeys from 'snakecase-keys';
import { stringifyTags } from 'utils/strings';
import { dataURLtoImageFile } from 'utils/files';
import moment from 'moment';

function formatDate(date) {
  if (!date || date === '') return '';

  return moment(date).format('YYYY-MM-DD');
}

export function buildFormDataObject(body) {
  body.tags = stringifyTags(body.tags);
  body.speakers = stringifyTags(body.speakers);
  body.accessibilityOptions = stringifyTags(body.accessibilityOptions);

  const formDataPayload = snakecaseKeys(body);

  formDataPayload.image_file = dataURLtoImageFile(body.imageFile, 'new-name.png');
  formDataPayload.event_url = formDataPayload.event_url || '';
  formDataPayload.start_date = formatDate(formDataPayload.start_date);
  formDataPayload.end_date = formatDate(formDataPayload.end_date);
  formDataPayload.cfp_due_date = formatDate(formDataPayload.cfp_due_date);
  formDataPayload.in_person = null
  formDataPayload.virtual = null

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
        formDataPayload.image_file.name,
      );
    } else if (formDataPayload[attributeKey]) {
      formData.append(attributeKey, formDataPayload[attributeKey]);
    }
  });

  return formData;
}

export async function api(method, resource, body) {
  let json;

  try {
    const response = await fetch(`${API_URL}/api/v1/${resource}`, {
      method,
      credentials: 'include',
      body: buildFormData(body),
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
