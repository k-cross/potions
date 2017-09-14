import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
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

let middleware = applyMiddleware(routerMiddleware(BrowserRouter));
const store = createStore(reducers, initial_state, middleware);

ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
