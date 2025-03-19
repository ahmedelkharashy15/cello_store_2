import React from 'react'
import './Team.css'
import team from '../team'

export default function Team() {
  return (
    <div>
      <div className="container team-section">
        <h2 className='text-center mb-5'>Our Team Members</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {team.map((item)=>{
            return(
              <div className="col">
                <div className="team-card d-flex justify-content-around align-items-center mb-5 py-5">
                  <img src={item.pic} className='rounded-circle' width={100} alt="" />
                  <div className='text-center'>
                    <h4 className='mb-3'>{item.name}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
