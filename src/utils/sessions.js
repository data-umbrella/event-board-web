export function sessionStore(itemId, values) {
  window.sessionStorage.setItem(itemId, JSON.stringify(values));
}
