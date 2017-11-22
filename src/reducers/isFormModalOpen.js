import { TOGGLE_MODAL_FORM } from '../actions';

const isFormModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_FORM:
      return !state;
    default:
      return state;
  }
}

export default isFormModalOpen;
