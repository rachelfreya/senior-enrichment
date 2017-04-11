import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeStudent } from '../action-creators/actions'

function Student (props) {

  const handleSubmit = e => {
    props.removeStudent(props.student.id)
  }

  return (
      <div>
        <div>
          <h3>{props.student.name}</h3>
          <h4>{props.student.email}</h4>
        </div>
        <div>
          <Link to={`/students/${props.student.id}/edit`}>
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

const mapState = ({ student }) => ({ student })

const mapDispatch = { removeStudent }

export default connect(mapState, mapDispatch)(Student)
