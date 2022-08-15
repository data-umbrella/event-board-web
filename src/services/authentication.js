import {
  SIGN_OUT_URL,
  CURRENT_USER_URL,
  VERIFY_URL,
  MAGIC_LINK_URL,
} from 'constants/urls';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export function fetchCurrentUser() {
  return fetch(CURRENT_USER_URL, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: DEFAULT_HEADERS,
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
    const currentUserResponse = await fetch(CURRENT_USER_URL, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        ...DEFAULT_HEADERS,
        'Authorization': `Token ${verificationJSON.token}`,
      },
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

    window.localStorage.setItem('USERNAME', email);
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

    return true;
  } catch (e) {
    throw (new Error('Bad request'));
  }
}
