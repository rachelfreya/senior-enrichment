const initialState = {
  students: [],
  campuses: [],
  selectedStudent: {},
  selectedCampus: {}
}

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case 'LOAD_STUDENTS':
      newState.students = action.students
      break
    case 'LOAD_CAMPUSES':
      newState.campuses = action.campuses
      break
    case 'LOAD_STUDENT':
      newState.selectedStudent = action.student
      break
    case 'LOAD_CAMPUS':
      newState.selectedCampus = action.campus
      break
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
      newState.students = state.students.filter(student => student.id !== action.student.id)
      break
    case 'DELETE_CAMPUS':
      newState.campuses = state.campuses.filter(campus => campus.id !== action.campus.id)
      break
    default: return state
  }
  return newState
};

export default rootReducer
