import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { removeStudent } from '../action-creators/actions'

//Component
function Student (props) {

  //delete the selected student
  const handleSubmit = () => {
    props.removeStudent(props.selectedStudent.id)
  }

  return (
      <div>
        <div>
          <h3>{props.selectedStudent.name}</h3>
          <h4>{props.selectedStudent.email}</h4>
        </div>
        <div>
          <Link to={`/campuses/${props.selectedStudent.campusId}`}>
            <div className='caption'>
              <h5>
                <span>Campus</span>
              </h5>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`/students/${props.selectedStudent.id}/edit`}>
            <div className='caption'>
              <h5>
                <span>Edit Student</span>
              </h5>
            </div>
          </Link>
        </div>
        <div>
          <button onSubmit={handleSubmit}>Delete Student</button>
        </div>
      </div>
      )
}

//Container

const mapState = ({ selectedStudent }) => ({ selectedStudent })

const mapDispatch = { removeStudent }

export default connect(mapState, mapDispatch)(Student)
