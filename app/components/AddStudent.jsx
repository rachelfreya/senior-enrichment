import React from 'react';
import { connect } from 'react-redux'
import { newStudent } from '../action-creators/actions'

function AddStudent (props) {

  const handleSubmit = e => {
    props.newStudent({name: e.target.value.name, email: e.target.value.email})
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

const mapDispatch = {newStudent}

export default connect(null, mapDispatch)(AddStudent)
