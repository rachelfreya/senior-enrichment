import React from 'react';
import { connect } from 'react-redux'
import { newCampus } from '../action-creators/actions'

function AddCampus (props) {

  const handleSubmit = e => {
    props.newCampus({name: e.target.value.name, imageUrl: e.target.value.url})
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

const mapDispatch = {newCampus}

export default connect(null, mapDispatch)(AddCampus)
