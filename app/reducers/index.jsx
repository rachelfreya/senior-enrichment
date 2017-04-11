import { combineReducers } from 'redux'

const initialState = {
  students: [],
  campuses: [],
  selectedStudent: {},
  selectedCampus: {}
}

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case 'ADD_STUDENT':
      newState.students = [...state.students, action.student]
      break
    case 'ADD_CAMPUS':
      newState.campuses = [...state.campuses, action.campus]
      break
    case 'EDIT_STUDENT':
      newState.selectedStudent = action.student
      break
    case 'EDIT_CAMPUS':
      newState.selectedCampus = action.campus
      break
    case 'DELETE_STUDENT':
      newState.students = action.students
      break
    case 'DELETE_CAMPUS':
      newState.campuses = action.campuses
      break
    default: return newState
  }
  return newState
};

export default rootReducer
