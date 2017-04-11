import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeCampus } from '../action-creators/actions'


function Campus (props) {

  const handleSubmit = e => {
    props.removeCampus(props.campus.id)
  }

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
        <button onSubmit={handleSubmit}>Delete Campus</button>
      </div>
      <div>
        {
        props.students.filter((student) => (student.campusId = props.campus.id))
          .map((student) => (
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
        }
      </div>
    </div>
    )
}

const mapState = ({ students, campus }) => ({ students, campus })

const mapDispatch = { removeCampus }

export default connect(mapState, mapDispatch)(Campus)
