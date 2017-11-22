export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';

export const addEduist = ({ name, dob, dod, summary }) => {
  return {
    type: ADD_EDUIST,
    name,
    details: {
      dob,
      dod,
      summary
    }
  }
};

export const removeEduist = (name) => {
  return {
    type: REMOVE_EDUIST,
    name,
  }
};
