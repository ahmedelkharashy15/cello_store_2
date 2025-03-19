import React from 'react'
import './Main.css'
import { NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main-section'>
      <div className="main-box">
        <div className='container'>
          <p className='display-4'><span className='fw-bold'>Welcome to</span> Cello Shop</p>
          <p className='mt-4 fs-6'>Cello is an e-commerce website in Jordan, to sell the musical instruments of all kinds , in a way to make purchasing and owning musical instruments easy for everyone, by providing great prices and excellent service, regardless of where you live.
          </p>
          <NavLink className="d-block main-button mt-4" to="/shop">Shop Now <i class="fas fa-shopping-cart"></i></NavLink>
        </div>
      </div>
    </div>
  )
}
