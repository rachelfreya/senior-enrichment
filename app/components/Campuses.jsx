import React from 'react';
import {Link} from 'react-router';


export default function Campuses (props) {
  const handleAdd = e => {
    props.addCampus(e.target.value)
  }

  return (
    <div>
      <h3>Campuses</h3>
      <div>
        <button onSubmit={handleAdd}>Add Campus</button>
      </div>
      <div>
      {
        props.campuses.map((campus) => (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <div className='caption'>
                    <h5>
                      <span>{campus.name}</span>
                    </h5>
                  </div>
                </Link>
              </div>
              ))
            }
            </div>
          </div>
          )
}
