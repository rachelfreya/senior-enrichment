import React from 'react';

export default function AddCampus (props) {

  return (
    <div>
      <form onSubmit={props.handleSumbit}>
        Campus name:
        <input type='text' name='name'>
        Campus image URL:
        <input type='text' name='url'>
        <input type='submit' value='Submit'>
      </form>
    </div>
      )
}
