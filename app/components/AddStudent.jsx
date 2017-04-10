import React from 'react';

export default function AddStudent (props) {

  return (
    <div>
      <form onSubmit={props.handleSumbit}>
        Student name:
        <input type='text' name='name'>
        Student email:
        <input type='text' name='email'>
        <input type='submit' value='Submit'>
      </form>
    </div>
      )
}
