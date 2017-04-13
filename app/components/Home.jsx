import React from 'react';

export default function Home () {
  return (
    <div>
      <div>
        <h2>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        </div>
        <div>
          <Link to={`/students`}>
            <div className='caption'>
              <h5>
                <span>Students</span>
              </h5>
            </div>
          </Link>
          <Link to={`/campuses`}>
            <div className='caption'>
              <h5>
                <span>Campuses</span>
              </h5>
            </div>
          </Link>
        </div>
      </div>
  )
}
