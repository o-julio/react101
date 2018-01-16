import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from 'screens/Home';
import User from 'screens/User';
import {Provider} from 'react-redux'
import configureStore from 'store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles.css';

const store = configureStore()

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/:username" component={User} />
    </Router>
  </Provider>,
  root
);
