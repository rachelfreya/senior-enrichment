import React from 'react';
import {Link} from 'react-router';

export default function Campus (props) {

  return (
    <div>
      <div>
        <h3>{props.campus.name}</h3>
        <img src={props.campus.imageUrl} className='img-thumbnail' />
      </div>
      <div>
        <Link to={`/campuses/${props.campus.id}/edit`}>
          <div className='caption'>
            <h5>
              <span>Edit Campus</span>
            </h5>
          </div>
        </Link>
      </div>
      <div>
        <button onSubmit={props.deleteCampus}>Delete Campus</button>
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
