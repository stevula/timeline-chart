import { OPEN_EDUIST_FORM, CLOSE_EDUIST_FORM } from '../actions';

const isFormActive = (state = false, action) => {
  switch (action.type) {
    case OPEN_EDUIST_FORM:
      return true;
    case CLOSE_EDUIST_FORM:
      return false;
    default:
      return state;
  }
}

export default isFormActive;
