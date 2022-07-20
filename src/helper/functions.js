// //each day is 86400000 millisec you know its too much to waste /:

export const checkLocal = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : false;
};
