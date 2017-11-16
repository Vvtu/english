export const loadItem = (key) => {
  try {
    const value =  localStorage.getItem(key);
    return JSON.parse(value);
  } catch (err) {
    console.log('Failed to load item from localStorage. err = ', err);
    return undefined;
  }
};

export const saveItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.error(err);
  }
};
