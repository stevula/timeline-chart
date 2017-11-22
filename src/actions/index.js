export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';
export const TOGGLE_SUMMARY_MODAL = 'TOGGLE_SUMMARY_MODAL';
export const TOGGLE_FORM_MODAL = 'TOGGLE_FORM_MODAL';

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

export const toggleFormModal = () => {
  return { type: TOGGLE_FORM_MODAL };
}

export const toggleSummaryModal = () => {
  return { type: TOGGLE_SUMMARY_MODAL };
}
