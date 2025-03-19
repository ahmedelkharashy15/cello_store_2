import React from 'react'
import beethovenImg from '../assets/beethoven.jpg'
import mozartImg from '../assets/mozart.jpg'
import './Customers.css'

export default function Customers() {
  return (
    <div>
      <div className="container section-box pb-5">
        <h4 className='fw-bold text-center'>WHAT OUR CUSTOMERS ARE SAYING</h4>
        <div className="line mt-3 mb-4"></div>
        <div className="customers-box row row-cols-1 row-cols-lg-2 px-4 px-md-5">
          <div className="review d-flex flex-column flex-md-row justify-content-center align-items-center py-3 py-md-5 col border-end border-bottom">
            <img className='rounded-circle' width={100}  src={beethovenImg} alt="" />
            <div className='mt-4 mt-md-0'>
              <p><i className="fas fa-quote-left mx-4"></i>What a great piece of music !</p>
              <p className='text-uppercase mx-4'>beethoven<span className='text-capitalize'>, composer pianist</span></p>
            </div>
          </div>
          <div className="review d-flex flex-column flex-md-row align-items-center justify-content-center py-3 py-md-5 col border-end border-bottom">
            <img className='rounded-circle' width={100} src={mozartImg} alt="" />
            
            <div className='mt-4 mt-md-0'>
              <p className=''><i className="fas fa-quote-left mx-4"></i>Such a nice company</p>
              <p className='text-uppercase mx-4'>wolfgang mozart<span className='text-capitalize'>, composer</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
