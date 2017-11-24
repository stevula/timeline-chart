import { combineReducers } from 'redux';
import timelineEvents from './timelineEvents';
import isFormModalOpen from './isFormModalOpen';

const app = combineReducers({
  timelineEvents,
  isFormModalOpen
});

export default app;
