import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import './App.css';
import Chart from './components/Chart';

const store = createStore(app);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chart />
        </div>
      </Provider>
    );
  }
}

export default App;
