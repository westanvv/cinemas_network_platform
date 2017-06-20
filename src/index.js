import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'

import * as configureStore from './store'

import MainLayout from './containers/Main'

import './styles/style.css'

const store = configureStore.STORE;

window.onload = function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route name='MainLayout' component={MainLayout}>
        </Route>
      </Router>
    </Provider>,

    document.getElementById('root'))
};
