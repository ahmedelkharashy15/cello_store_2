import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'
import { useSelector } from 'react-redux'
import Cart from './Cart'

export default function Navbar() {
  
  let userExist = sessionStorage.getItem('email')

  const clearStorage = ()=>{
    sessionStorage.removeItem('email');
    localStorage.removeItem('cart')
    localStorage.removeItem('userCart')
    window.location = '/'
  }

  const cart = useSelector((state) => state)
  var cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : cart
  let n = 0
  cartProducts.map((item)=>{
    return n+= item.count
  })

  const navigate = useNavigate()
  const handleNav = () => {
    if(userExist){
      navigate('/checkout')
    }else{
      navigate('/registerion')
    }
  }
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-background fixed-top">
        <div class="container d-flex align-items-center">
            <NavLink to="/" className="navbar-brand fs-2 d-flex align-items-center">
                <img src={logo} height={50} className='align-text-top me-2' /> <span>CELLO STORE</span>
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 links-hover">
                <li class="nav-item">
                <NavLink to="/" className="nav-link me-2" aria-current="page" href="#">Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/shop" className="nav-link me-2">Shop</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/team" className="nav-link me-2">Our Team</NavLink>
                </li>
                {userExist ?
                (<><li class="nav-item">
                <NavLink to="/account" className="nav-link">My Account</NavLink>
                </li>
                <li class="nav-item">
                <button onClick={clearStorage} className="nav-link">Logout</button>
                </li></>
                )
                :
                (<li class="nav-item">
                  <NavLink to="/registerion" className="nav-link">Login</NavLink>
                </li> )
                }
            </ul>
            <button type="button" className="ms-0 ms-lg-5 cart-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fas fa-shopping-cart"><span>{n}</span></i>
            </button>
            </div>
        </div>
      </nav>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Shopping Bag</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {n == 0 ? <p className='display-5 text-center'>Your Cart is Empty</p> : 
                <Cart/>
                }
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={n == 0} onClick={handleNav} data-bs-dismiss="modal" type="button" className="btn btn-primary">Checkout</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
