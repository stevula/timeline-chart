import { TOGGLE_EDUIST_FORM_ACTIVE } from '../actions';

const isFormActive = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_EDUIST_FORM_ACTIVE:
      return !state;
    default:
      return state;
  }
}

export default isFormActive;
