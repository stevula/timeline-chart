import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';
import timelineEvents from './data/events.json';

const defaultState = {
  timelineEvents: timelineEvents.data,
  isFormModalOpen: false
};

const store = createStore(
  app,
  loadState() || defaultState
);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
