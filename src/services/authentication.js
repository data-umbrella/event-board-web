import { API_URL } from 'constants/urls';

// NOTE: This a mock implementation. This will be related with code to talk
// to the Django backend.
export async function authenticateUser(email, password) {
  const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const json = await response.json();

  if (json.length === 1) {
    const user = json[0];

    window.localStorage.setItem('USER_NAME', user.name);
    window.localStorage.setItem('USER_AUTHENTICATED', user.name);

    return user;
  } else {
    return null;
  }
}
