import { TOGGLE_MODAL_OPEN } from '../actions';

const isModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_OPEN:
      return !state;
    default:
      return state;
  }
}

export default isModalOpen;
