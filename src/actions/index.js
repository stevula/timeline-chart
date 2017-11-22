export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';

export const TOGGLE_MODAL_OPEN = 'TOGGLE_MODAL_OPEN';

export const addEduist = ({ name, birth, death, summary }) => {
  return {
    type: ADD_EDUIST,
    name,
    birth,
    death,
    summary
  }
};

export const removeEduist = (name) => {
  return {
    type: REMOVE_EDUIST,
    name,
  }
};

export const toggleModalOpen = () => {
  return { type: TOGGLE_MODAL_OPEN };
}
