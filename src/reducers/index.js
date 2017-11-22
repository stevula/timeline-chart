import { combineReducers } from 'redux';
import eduists from './eduists';
import isFormModalOpen from './isFormModalOpen';

const app = combineReducers({
  eduists,
  isFormModalOpen
});

export default app;
