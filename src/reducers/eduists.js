import { ADD_EDUIST, REMOVE_EDUIST } from '../actions';

const eduists = (state = [], action) => {
  switch (action.type) {
    case ADD_EDUIST:
      return [
        ...state,
        { details: action.details }
      ];
    case REMOVE_EDUIST:
      return state.filter(eduist => eduist.name !== action.id);
    default:
      return state;
  }
};

export default eduists;
