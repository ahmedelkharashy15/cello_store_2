import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Product.css'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import data from '../data'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/actions/actionTypes'
import Swal from 'sweetalert2'

export default function Product() {
  
  const {productId} = useParams()
  const product = data.find((item)=>{
    return item.id === productId
  })

  const dispatch = useDispatch()

  const alertFunc = ()=>{
    Swal.fire({
    position: "center",
    icon: "success",
    title: "Your item has been added to cart",
    width: "650",
    showConfirmButton: false,
    timer: 1500
    });
  }
  
  return (
    <div>
      <Navbar/>
      <div className="product-section">
        <div className="container">
          <div className='navigation-btn'>
            <NavLink className="text-decoration-none" to="/">Home</NavLink> / 
            <NavLink className="text-decoration-none" to="/shop"> Shop</NavLink> /
            <NavLink className="text-decoration-none text-dark"> {product.name}</NavLink>
          </div>
          <div className="row product-container my-5 py-5 px-5 d-flex align-items-center justify-content-around">
            <div className='col-12 col-md-4'>
              <img src={product.img} className='product-image' alt={product.alt} />
            </div>
            <div className="product-details col-12 col-md-7 d-flex flex-column justify-content-between mt-5 mt-md-0">
              <p className='display-4'>{product.name}</p>
              <p className='my-4 fw-bold'>{product.price} JD</p>
              <p className='mb-4 text-muted'>{product.info}</p>
              <button onClick={()=>{dispatch(addToCart(product)) 
                alertFunc()
              }} className='main-button '>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
