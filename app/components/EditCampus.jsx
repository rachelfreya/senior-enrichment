import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import { editCampus } from '../action-creators/actions'

//Component
function EditCampus (props) {

  //update the selected campus with the new values from the form
  const handleSubmit = e => {
    props.updateCampus(props.selectedCampus.id, {name: e.target.name.value, imageUrl: e.target.url.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Campus name:
        <input type='text' name='name' value={props.selectedCampus.name} />
        Campus image URL:
        <input type='text' name='url' value={props.selectedCampus.imageUrl} />
        <input type='submit' value='Submit' />
      </form>
    </div>
      )
}

//Container
const updateCampus = (campusId, updatedCampus) => {
  return dispatch => {
    axios.put(`/api/campuses/${campusId}`, {updatedCampus})
    .then(res => {
      dispatch(editCampus(res.data))
    })
  }
}

const mapState = ({ selectedCampus }) => ({ selectedCampus })

const mapDispatch = { updateCampus }

export default connect(mapState, mapDispatch)(EditCampus)
