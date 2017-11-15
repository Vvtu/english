export const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem('state'));
  } catch (err) {
    console.log('Failed to load state from localStorage. err = ', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
