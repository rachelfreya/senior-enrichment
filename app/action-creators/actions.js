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
