import {
  SIGN_OUT_URL,
  CURRENT_USER_URL,
  VERIFY_URL,
  MAGIC_LINK_URL,
} from 'constants/urls';
import { setUserToken } from 'utils/sessions';
import { buildAuthenticatedHeaders } from 'utils/api';
import { DEFAULT_HEADERS } from 'constants/api';

export function fetchCurrentUser() {
  return fetch(CURRENT_USER_URL, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: buildAuthenticatedHeaders(),
  });
}

export async function fetchVerification(token, email) {
  try {
    const verifyResponse = await fetch(VERIFY_URL, {
      method: 'POST',
      body: JSON.stringify({ token, email }),
      headers: DEFAULT_HEADERS,
    });

    if (verifyResponse.status !== 200) {
      throw (new Error('Bad request'));
    }

    const verificationJSON = await verifyResponse.json();

    setUserToken(verificationJSON.token);

    const currentUserResponse = await fetch(CURRENT_USER_URL, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: buildAuthenticatedHeaders(),
    });

    return currentUserResponse.json();
  } catch (e) {
    throw (new Error('Bad request'));
  }
}

export async function fetchMagicLink(email) {
  try {
    const response = await fetch(MAGIC_LINK_URL, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: DEFAULT_HEADERS,
    });

    if (response.status !== 200) {
      throw (new Error('Bad request'));
    }

    window.sessionStorage.setItem('USERNAME', email);

    return true;
  } catch (e) {
    throw (new Error('Bad request'));
  }
}

export async function fetchSignOut() {
  try {
    const response = await fetch(SIGN_OUT_URL, {
      method: 'DELETE',
      credentials: 'include',
      headers: DEFAULT_HEADERS,
    });

    if (response.status !== 204) {
      throw (new Error('Bad request'));
    }

    setUserToken(null);

    return true;
  } catch (e) {
    throw (new Error('Bad request'));
  }
}
