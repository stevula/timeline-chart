import { combineReducers } from 'redux';
import eduists from './eduists';
import isFormActive from './isFormActive';

const app = combineReducers({
  eduists,
  isFormActive
});

export default app;
