import React from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../action-creators/actions';

function EditStudent (props) {

  const handleSubmit = e => {
    props.updateStudent({name: e.target.value.name, email: e.target.value.email})
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

const mapState = ({ selectedStudent }) => ({ selectedStudent })

const mapDispatch = { updateStudent }

export default connect(mapState, mapDispatch)(EditStudent)
