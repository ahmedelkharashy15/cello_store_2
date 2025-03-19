import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className='footer-box bg-black text-center py-4'>
        <div className="icons-box mb-4">
            <i className="fab fa-twitter me-4"></i>
            <i className="fab fa-facebook-square me-4"></i>
            <i className="fab fa-instagram me-4"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <div className='copyright-text'>
            copyright &copy; 2025
        </div>
      </div>
    </div>
  )
}
