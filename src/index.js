import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import registerServiceWorker from './registerServiceWorker';
import eduists from './data/eduists.json';

const store = createStore(app, { eduists: eduists.data });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
