import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

function Campuses (props) {

  return (
    <div>
      <h3>Campuses</h3>
      <div>
        <Link to={`/campuses/create`}>
          <div className='caption'>
            <h5>
              <span>Add Campus</span>
                </h5>
          </div>
        </Link>
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

const mapState = ({ campuses }) => ({ campuses })

export default connect(mapState, null)(Campuses)
