export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';
export const TOGGLE_SUMMARY_BUBBLE = 'TOGGLE_SUMMARY_BUBBLE';
export const TOGGLE_MODAL_FORM = 'TOGGLE_MODAL_FORM';

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

export const toggleModalForm = () => {
  return { type: TOGGLE_MODAL_FORM };
}

export const toggleSummary = () => {
  return { type: TOGGLE_SUMMARY_BUBBLE };
}
