export const getItemFormLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  const arr = (item || '').split('=');
  const shown = parseInt(arr[0], 10) || 0;
  let failed = 0;
  let isDeleted = undefined;
  if (arr.length > 1) {
    failed = parseInt(arr[1], 10) || 0;
  }
  if (arr.length > 2) {
    isDeleted = arr[2];
  }
  return { shown, failed, isDeleted };
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  //  The  min is inclusive  and the max is exclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

export const arrayRandomOrder = (arr000) => {
  const arr = arr000.slice(0);
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) {
    const j = getRandomInt(i, len);
    const swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
  }
  return arr;
};

export const filterDeletedOff = (arr) => {
  const result = (arr || []).filter((elem) => {
    const russian = Object.keys(elem || {})[0];
    if (russian) {
      const {isDeleted} = getItemFormLocalStorage(russian);
      return isDeleted === undefined;
    } else {
      return false;
    }
  });
  return result;
};
