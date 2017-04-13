'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
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
import { getCampusById, getStudentById, loadAllCampuses, loadAllStudents } from './action-creators/actions'

const onCampusEnter = (route) => {
    store.dispatch(getCampusById(route.params.campusid))
}

const onStudentEnter = (route) => {
    store.dispatch(getStudentById(route.params.studentid))
}

const onCampusesEnter = () => {
    store.dispatch(loadAllCampuses())
}

const onStudentsEnter = () => {
    store.dispatch(loadAllStudents())
}

render(
  <Provider store={store}>
    <Router history={hashHistory} />
    <Root />
    <Route path='/' component={Home} />
    <Route path='/campuses' component={Campuses} onEnter={onCampusesEnter} />
    <Route path='/campuses/:campusid' component={Campus} onEnter={onCampusEnter} />
    <Route path='/students' component={Students} onEnter={onStudentsEnter} />
    <Route path='/students/:studentid' component={Student} onEnter={onStudentEnter} />
    <Route path='/campuses/:campusid/edit' component={EditCampus} />
    <Route path='/students/:studentid/edit' component={EditStudent} />
    <Route path='/campuses/create' component={AddCampus} />
    <Route path='/students/create' component={AddStudent} />
    <IndexRedirect to='/' />
  </Provider>,
  document.getElementById('main')
)
