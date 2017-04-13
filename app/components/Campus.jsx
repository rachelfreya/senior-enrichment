import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

import { deleteCampus, removeStudent } from '../action-creators/actions'

//Component
function Campus (props) {

  //delete the selected campus
  const deleteCampusButton = () => {
    props.removeCampus(props.selectedCampus.id)
  }

  //delete that student
  const deleteStudentButton = studentId => {
    props.removeStudent(studentId)
  }

  return (
    <div>
      <div>
        <h3>{props.selectedCampus.name}</h3>
        <img src={props.selectedCampus.imageUrl} className='img-thumbnail' />
      </div>
      <div>
        <Link to={`/campuses/${props.selectedCampus.id}/edit`}>
          <div className='caption'>
            <h5>
              <span>Edit Campus</span>
            </h5>
          </div>
        </Link>
      </div>
      <div>
        <button onSubmit={deleteCampusButton}>Delete Campus</button>
      </div>
      <div>
        {
        props.students.filter(student => student.campusId === props.selectedCampus.id)
          .map((student) => (
              <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <div className='caption'>
                    <h5>
                      <span>{student.name}</span>
                    </h5>
                  </div>
                  <div>
                    <button onSubmit={() => deleteStudentButton(student.id)}>Delete Student</button>
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

//Container
const removeCampus = campusId => {
  return dispatch => {
    axios.delete(`/api/campuses/${campusId}`)
      .then(res => {
        dispatch(deleteCampus(res.data));
      });
  };
};

const mapState = ({ students, selectedCampus }) => ({ students, selectedCampus })

const mapDispatch = { removeCampus, removeStudent }

export default connect(mapState, mapDispatch)(Campus)
