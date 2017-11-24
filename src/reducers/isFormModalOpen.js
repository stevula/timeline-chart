import { TOGGLE_FORM_MODAL } from '../actions';

// where the modal for "add event" form is open
const isFormModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FORM_MODAL:
      return !state;
    default:
      return state;
  }
}

export default isFormModalOpen;
