import { combineReducers } from 'redux'

const initialState = {
  students: [],
  campuses: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STUDENT':
      break
    case 'ADD_CAMPUS':
      break
    case 'EDIT_CAMPUS':
      break
    case 'EDIT_STUDENT':
      break
    case 'DELETE_STUDENT':
      break
    case 'DELETE_CAMPUS'
      break
    default: return state
  }
};

export default rootReducer
