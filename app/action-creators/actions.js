import axios from 'axios';
import { hashHistory } from 'react-router'

export const addStudent = student => ({
  type: 'ADD_STUDENT',
  student
})

export const addCampus = campus => ({
  type: 'ADD_CAMPUS',
  campus
})

export const editStudent = student => ({
  type: 'EDIT_STUDENT',
  student
})

export const editCampus = campus => ({
  type: 'EDIT_CAMPUS',
  campus
})

export const deleteStudent = student => ({
  type: 'DELETE_STUDENT',
  students
})

export const deleteCampus = campus => ({
  type: 'DELETE_CAMPUS',
  campuses
})

export const newStudent = student => {
  return dispatch => {
    axios.post('/api/students/create', {student})
    .then(res => {
      dispatch(addStudent(res.data))
      }, () => {
        hashHistory.push(`students/${student.id}`)
      })
  }
}

export const newCampus = campus => {
  return dispatch => {
    axios.post('/api/campuses/create', {campus})
    .then(res => {
      dispatch(addCampus(res.data))
      }, () => {
        hashHistory.push(`campuses/${campus.id}`)
      })
  }
}

export const updateStudent = (studentId, updatedStudent) => {
  return dispatch => {
    axios.put(`/api/students/${studentId}`, {updatedStudent})
    .then(res => {
      dispatch(editStudent(res.data))
    })
  }
}

export const updateCampus = (campusId, updatedCampus) => {
  return dispatch => {
    axios.put(`/api/campuses/${campusId}`, {updatedCampus})
    .then(res => {
      dispatch(editCampus(res.data))
    })
  }
}

export const removeStudent = studentId => {
  return dispatch => {
    axios.delete(`/api/students/${studentId}`)
      .then(res => {
        dispatch(deleteStudent(res.data));
      });
  };
};

export const removeCampus = campusId => {
  return dispatch => {
    axios.delete(`/api/campuses/${campusId}`)
      .then(res => {
        dispatch(deleteCampus(res.data));
      });
  };
};
