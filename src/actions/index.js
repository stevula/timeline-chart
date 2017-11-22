export const ADD_EDUIST = 'ADD_EDUIST';
export const REMOVE_EDUIST = 'REMOVE_EDUIST';
export const OPEN_EDUIST_FORM = 'OPEN_EDUIST_FORM';
export const CLOSE_EDUIST_FORM = 'CLOSE_EDUIST_FORM';

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

export const openEduistForm = () => {
  return { type: OPEN_EDUIST_FORM };
}

export const closeEduistForm = () => {
  return { type: CLOSE_EDUIST_FORM };
}
