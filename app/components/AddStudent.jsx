import React from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import axios from 'axios';

import { addStudent } from '../action-creators/actions'

//Component
function AddStudent (props) {

  //create a new student with the name and email values from the form
  const handleSubmit = e => {
    props.newStudent({name: e.target.name.value, email: e.target.email.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Student name:
        <input type='text' name='name' />
        Student email:
        <input type='text' name='email' />
        <input type='submit' value='Submit' />
      </form>
    </div>
      )
}

//Container
const newStudent = student => {
  return dispatch => {
    axios.post('/api/students/create', {student})
    .then(res => {
      dispatch(addStudent(res.data))
      }, () => {
        hashHistory.push(`students/${student.id}`)
      })
  }
}

const mapDispatch = { newStudent }

export default connect(null, mapDispatch)(AddStudent)
