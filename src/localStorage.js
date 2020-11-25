/* eslint-disable no-undef */
export const loadState = () => {
  try {
    const serializedState = typeof window !== 'undefined' ? localStorage.getItem('state') : null;
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    if (typeof window !== 'undefined') {
      localStorage.setItem('state', serializedState);
    }
  } catch (err) {
    // Ignore writing error
  }
};
