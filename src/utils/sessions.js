const USER_TOKEN_KEY = process.env.USER_TOKEN_KEY;

export function sessionStore(itemId, values) {
  window.sessionStorage.setItem(itemId, JSON.stringify(values));
}

export function getUserToken() {
  return window.sessionStorage.getItem(USER_TOKEN_KEY);
}

export function setUserToken(token) {
  window.sessionStorage.setItem(USER_TOKEN_KEY, token);
}
