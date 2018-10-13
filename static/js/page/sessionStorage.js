function sessionStorageWithItem(sessionStorage, key, value) {
  sessionStorage.setItem(key, value);
  return sessionStorage;
}

function itemOfSessionStorage(sessionStorage, key) {
  return sessionStorage.getItem(key);
}

function sessionStorageWithRemovedItem(sessionStorage, key) {
  sessionStorage.removeItem(key);
  return sessionStorage;
}

function clearedSessionStorage(sessionStorage) {
  sessionStorage.clear();
  return sessionStorage;
}
