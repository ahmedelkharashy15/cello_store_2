import React from 'react'
import './Cards.css'

export default function Cards() {
  return (
    <div>
      <div className="container">
        <div className="cards-box d-flex flex-column flex-md-row text-center px-4 my-5">
            <div className="card-box py-3 px-4">
                <i className="fas fa-truck"></i>
                <h5 className='my-3 fw-bold'>FREE SHIPPING</h5>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisci</p>
            </div>
            <div className="card-box py-3 px-4">
                <i class="fas fa-exchange-alt"></i>
                <h5 className='my-3 fw-bold'>RETURN POLICY</h5>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisci</p>
            </div>
            <div className="card-box py-3 px-4">
                <i class="fas fa-headset"></i>
                <h5 className='my-3 fw-bold'>24/7 SUPPORT</h5>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisci</p>
            </div>
            <div className="card-box py-3 px-4">
                <i class="fas fa-money-check"></i>
                <h5 className='my-3 fw-bold'>SECURE PAYMENT</h5>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisci</p>
            </div>
        </div>
      </div>
    </div>
  )
}
