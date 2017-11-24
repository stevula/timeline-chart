export const ADD_TIMELINE_EVENT = 'ADD_TIMELINE_EVENT';
export const REMOVE_TIMELINE_EVENT = 'REMOVE_TIMELINE_EVENT';
export const TOGGLE_FORM_MODAL = 'TOGGLE_FORM_MODAL';

export const addTimelineEvent = ({ name, birth, death, summary }) => {
  return {
    type: ADD_TIMELINE_EVENT,
    name,
    birth,
    death,
    summary
  };
};

export const removeTimelineEvent = (name) => {
  return {
    type: REMOVE_TIMELINE_EVENT,
    name,
  };
};

export const toggleFormModal = () => {
  return { type: TOGGLE_FORM_MODAL };
};
