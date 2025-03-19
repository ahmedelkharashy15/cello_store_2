import React from 'react'
import './Channel.css'

export default function Channel() {
  return (
    <div>
      <div className="container section-box">
        <h4 className='fw-bold text-center'>OUR CHANNEL ON YOUTUBE</h4>
        <div className="line mt-3 mb-4"></div>
        <div className='text-center'>
          <iframe 
          src="https://www.youtube.com/embed/WSRHCXf9Ltg" 
          title="Pop Music Tutorial Creation Of A Template" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen='yes' />
        </div>
      </div>
    </div>
  )
}
