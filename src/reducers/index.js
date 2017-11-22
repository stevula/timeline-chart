import { combineReducers } from 'redux';
import eduists from './eduists';
import isModalOpen from './isModalOpen';

const app = combineReducers({
  eduists,
  isModalOpen
});

export default app;
