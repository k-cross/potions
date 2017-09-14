import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import './stylesheets/main.scss';
import App from './App';
import { reducers } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

let users = [];
for (let i of Array(10).keys()) {
    users.push({
    id: i,
    username: 'ken' + i,
    job: 'employee ' + i,
  })
}

const initial_state = {
  users: {
    list: users,
  },
}

const store = createStore(reducers, initial_state);

ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
