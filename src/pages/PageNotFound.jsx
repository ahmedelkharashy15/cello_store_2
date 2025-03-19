import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='text-center mt-5'>
        <div className='fw-bold text-muted' style={{fontSize: '200px'}}>404</div>
        <p className='fs-3 mb-5'>Sorry, we couldn't find this page.</p>
        <NavLink to="/" className='fs-5 text-dark text-decoration-none'><i class="fas fa-angle-double-left"></i> Back to homepage</NavLink>
    </div>
  )
}