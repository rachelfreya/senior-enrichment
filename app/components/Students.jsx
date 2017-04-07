import React from 'react';
import {Link} from 'react-router';


export default function Students (props) {
  const handleAdd = e => {
    props.addStudent(e.target.value)
  }

  return (
    <div>
      <h3>Students</h3>
      <div>
        <button onSubmit={handleAdd}>Add Student</button>
      </div>
      <div>
      {
        props.students.map((student) => (
              <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <div className='caption'>
                    <h5>
                      <span>{student.name}</span>
                    </h5>
                  </div>
                </Link>
              </div>
              ))
            }
            </div>
          </div>
          )
}
