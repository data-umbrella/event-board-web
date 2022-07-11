import { API_URL } from 'constants/urls';

const headers = {
  'Content-Type': 'application/json',
}

export async function api(method, resource, body) {
  let json;

  try {
    const response = await fetch(`${API_URL}/${resource}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    json = await response.json();

    if (response.status === 400) {
      throw('Bad Request');
    }
  } catch (e) {
    throw(e.message);
  }

  return json;
}
