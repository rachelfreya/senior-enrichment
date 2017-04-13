import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import { editStudent } from '../action-creators/actions'

//Component
function EditStudent (props) {

  //update the selected student with the values from the form
  const handleSubmit = e => {
    props.updateStudent(props.selectedStudent.id, {name: e.target.name.value, email: e.target.email.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Student name:
        <input type='text' name='name' value={props.selectedStudent.name} />
        Student email:
        <input type='text' name='email' value={props.selectedStudent.email} />
        <input type='submit' value='Submit' />
      </form>
    </div>
      )
}

//Container
const updateStudent = (studentId, updatedStudent) => {
  return dispatch => {
    axios.put(`/api/students/${studentId}`, {updatedStudent})
    .then(res => {
      dispatch(editStudent(res.data))
    })
  }
}

const mapState = ({ selectedStudent }) => ({ selectedStudent })

const mapDispatch = { updateStudent }

export default connect(mapState, mapDispatch)(EditStudent)
