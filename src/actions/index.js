export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';

export const TOGGLE_EDUIST_FORM_ACTIVE = 'TOGGLE_EDUIST_FORM_ACTIVE';

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

export const toggleEduistFormActive = () => {
  return { type: TOGGLE_EDUIST_FORM_ACTIVE };
}
