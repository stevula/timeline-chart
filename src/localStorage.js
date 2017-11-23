export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('timelineState');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  localStorage.setItem('timelineState', JSON.stringify(state));
};
