import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

function Students (props) {

  return (
    <div>
      <h3>Students</h3>
      <div>
        <Link to={`/students/create`}>
          <div className='caption'>
            <h5>
              <span>Add Student</span>
                </h5>
          </div>
        </Link>
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

const mapState = ({ students }) => ({ students })

export default connect(mapState, null)(Students)
