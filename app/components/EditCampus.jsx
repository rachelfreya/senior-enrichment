import React from 'react';

export default function AddStudent (props) {

  return (
    <div>
      <form onSubmit={props.handleSumbit}>
        Campus name:
        <input type='text' name='name' value={props.name}>
        Campus image URL:
        <input type='text' name='url' value={props.imageUrl}>
        <input type='submit' value='Submit'>
      </form>
    </div>
      )
}
