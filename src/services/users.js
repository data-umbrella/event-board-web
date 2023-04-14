import {
  DELETE_ACCOUNT_URL,
} from 'constants/urls';
import { setUserToken } from 'utils/sessions';
import { buildAuthenticatedHeaders } from 'utils/api';


export async function fetchDeleteAccount() {
  try {
    const response = await fetch(DELETE_ACCOUNT_URL, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: buildAuthenticatedHeaders(),
    });

    if (response.status !== 204) {
      throw (new Error('Bad request'));
    }

    setUserToken(null);

    return true;
  }
  catch (e) {
    throw (new Error('Bad request'));
  }
}


