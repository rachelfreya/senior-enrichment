import React from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import axios from 'axios';

import { addCampus } from '../action-creators/actions'

//Component:
function AddCampus (props) {

  //create a new campus with the name and url values entered into the form
  const handleSubmit = e => {
    props.newCampus({name: e.target.name.value, imageUrl: e.target.url.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Campus name:
        <input type='text' name='name' />
        Campus image URL:
        <input type='text' name='url' />
        <input type='submit' value='Submit' />
      </form>
    </div>
      )
}
//Container:
const newCampus = campus => {
  return dispatch => {
    axios.post('/api/campuses/create', {campus})
    .then(res => {
      dispatch(addCampus(res.data))
      }, () => {
        hashHistory.push(`campuses/${campus.id}`)
      })
  }
}

const mapDispatch = { newCampus }

export default connect(null, mapDispatch)(AddCampus)
