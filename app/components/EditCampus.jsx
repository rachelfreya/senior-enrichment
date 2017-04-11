import React from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../action-creators/actions';


function EditCampus (props) {

  const handleSubmit = e => {
    props.updateCampus({name: e.target.value.name, imageUrl: e.target.value.url})
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

const mapState = ({ selectedCampus }) => ({ selectedCampus })

const mapDispatch = { updateCampus }

export default connect(mapState, mapDispatch)(EditCampus)
