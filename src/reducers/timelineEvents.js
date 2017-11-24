import {
  ADD_TIMELINE_EVENT,
  REMOVE_TIMELINE_EVENT,
} from '../actions';

// list of events recorded on the timeline
const timelineEvents = (state = [], action) => {
  switch (action.type) {
    case ADD_TIMELINE_EVENT:
      return [
        ...state,
        {
          name: action.name,
          birth: action.birth,
          death: action.death,
          summary: action.summary,
        }
      ];
    case REMOVE_TIMELINE_EVENT:
      return state.filter(timelineEvent => timelineEvent.name !== action.name);
    default:
      return state;
  }
};

export default timelineEvents;
