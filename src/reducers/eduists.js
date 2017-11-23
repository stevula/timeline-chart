import {
  ADD_EDUIST,
  REMOVE_EDUIST,
  TOGGLE_EDUIST_SUMMARY_MODAL
} from '../actions';

const eduists = (state = [], action) => {
  switch (action.type) {
    case ADD_EDUIST:
      return [
        ...state,
        {
          name: action.name,
          birth: action.birth,
          death: action.death,
          summary: action.summary,
        }
      ];
    case REMOVE_EDUIST:
      return state.filter(eduist => eduist.name !== action.name);
    case TOGGLE_EDUIST_SUMMARY_MODAL:
      return state.map((eduist) => {
        if (eduist.name === action.name) {
          return {
            ...eduist,
            isSummaryOpen: !eduist.isSummaryOpen,
          }
        }
        return {
          ...eduist,
          isSummaryOpen: false,
        };
      });
    default:
      return state;
  }
};

export default eduists;
