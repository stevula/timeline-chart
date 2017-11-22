import { TOGGLE_FORM_MODAL } from '../actions';

const isFormModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FORM_MODAL:
      return !state;
    default:
      return state;
  }
}

export default isFormModalOpen;
