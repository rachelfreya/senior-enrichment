import axios from 'axios'

export const loadStudents = students => ({
  type: 'LOAD_STUDENTS',
  students
})

export const loadCampuses = campuses => ({
  type: 'LOAD_CAMPUSES',
  campuses
})

export const loadStudent = student => ({
  type: 'LOAD_STUDENT',
  student
})

export const loadCampus = campus => ({
  type: 'LOAD_CAMPUS',
  campus
})

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
  student
})

export const deleteCampus = campus => ({
  type: 'DELETE_CAMPUS',
  campus
})

export const loadAllStudents = () => {
  return dispatch => {
    axios.get('/api/students')
      .then(res => {
        dispatch(loadStudents(res.data));
      });
  };
};

export const loadAllCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
      .then(res => {
        dispatch(loadCampuses(res.data));
      });
  };
};

export const getStudentById = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(res => {
        dispatch(loadStudent(res.data));
      });
  };
};

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => {
        dispatch(loadCampus(res.data));
      });
  };
};

export const removeStudent = studentId => {
  return dispatch => {
    axios.delete(`/api/students/${studentId}`)
      .then(res => {
        dispatch(deleteStudent(res.data));
      });
  };
};
