function localStorageWithItem(localStorage, key, value) {
  localStorage.setItem(key, value);
  return localStorage;
}

function itemOfLocalStorage(localStorage, key) {
  return localStorage.getItem(key);
}

function sessionLocalWithRemovedItem(localStorage, key) {
  localStorage.removeItem(key);
  return localStorage;
}

function clearedLocalStorage(localStorage) {
  localStorage.clear();
  return localStorage;
}
