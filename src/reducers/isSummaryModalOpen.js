import { TOGGLE_SUMMARY_BUBBLE } from '../actions';

const isSummaryOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SUMMARY_BUBBLE:
      return !state;
    default:
      return state;
  }
}

export default isSummaryOpen;
