import { ADD_EDUIST, REMOVE_EDUIST } from '../actions';

const eduists = (state = [], action) => {
  switch (action.type) {
    case ADD_EDUIST:
      return [
        ...state,
        {
          name: action.name,
          details: action.details
        }
      ];
    case REMOVE_EDUIST:
      return state.filter(eduist => eduist.name !== action.name);
    default:
      return state;
  }
};

export default eduists;
