'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Campus from './components/Campus'
import Campuses from './components/Campuses'
import Student from './components/Student'
import Students from './components/Students'


render (
  <Provider store={store}>
    <Router history={hashHistory} />
    <Root />
    <Route path='/' component={App} />
    <Route path='/campuses/:campusid' component={Campus} />
    <Route path='/campuses' component={Campuses} />
    <Route path='/students/:studentid' component={Campus} />
    <Route path='/students' component={Students} />
  </Provider>,
  document.getElementById('main')
)
