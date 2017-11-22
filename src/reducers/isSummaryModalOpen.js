import { TOGGLE_SUMMARY_MODAL } from '../actions';

const isSummaryOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SUMMARY_MODAL:
      return !state;
    default:
      return state;
  }
}

export default isSummaryOpen;
