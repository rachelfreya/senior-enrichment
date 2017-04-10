'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Home from './components/Home'
import Campus from './components/Campus'
import Campuses from './components/Campuses'
import Student from './components/Student'
import Students from './components/Students'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'
import AddCampus from './components/AddCampus'
import EditCampus from './components/EditCampus'

render (
  <Provider store={store}>
    <Router history={hashHistory} />
    <Root />
    <Route path='/' component={Home} />
    <Route path='/campuses' component={Campuses} />
    <Route path='/campuses/:campusid' component={Campus} />
    <Route path='/students' component={Students} />
    <Route path='/students/:studentid' component={Student} />
    <Route path='/campuses/:campusid/edit' component={EditCampus} />
    <Route path='/students/:studentid/edit' component={EditStudent} />
    <Route path='/campuses/create' component={AddCampus} />
    <Route path='/students/create' component={AddStudent} />
  </Provider>,
  document.getElementById('main')
)
