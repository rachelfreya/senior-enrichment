import React from 'react';

export default function Student (props) {
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
          <button onSubmit={props.deleteStudent}>Delete Student</button>
        </div>
      </div>
      )
}
