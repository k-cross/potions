import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { Switch } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import './index.css';
import './stylesheets/main.scss';
import App from './App';
import { reducers } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

let users = [];
for (let i of Array(30).keys()) {
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
    <BrowserRouter>
      <Switch component={App}>
        <Route path="/" component={Home} />
        <Route path="user-edit(/:id)" component={UserEdit} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
