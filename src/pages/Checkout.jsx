import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Checkout.css'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'

export default function Checkout() {

  const cart = useSelector((state) => state)
  var cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : cart
  let totalPrice = 0
    cartProducts.map((item)=>{
        return totalPrice += (item.count * item.price)
  })
  console.log(JSON.stringify(cartProducts))

  var userCart = localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : []
  console.log(userCart)
  
  const checkoutSubmit = (e)=>{
    e.preventDefault()
    
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order has been placed",
        width: "650",
        showConfirmButton: false,
        timer: 1500
      });

    
    setTimeout ( () => {
      window.location = "/account"
    } , 2000)

    
    userCart.push(JSON.stringify([{items : cartProducts} , {total : totalPrice}]))
   
    localStorage.setItem('userCart' , JSON.stringify(userCart))
    localStorage.setItem('cart' , [])
  }

  console.log(userCart)
  
  
  return (
    <div>
      <Navbar/>
        <div className="check-section">
        <h2 className='text-center mb-4'>Billing Details</h2>
        <div className="checkout-form">
                    <form onSubmit={checkoutSubmit}>
                        <div className="mb-3">
                          <label for="exampleCitySelector" className="form-label">City</label>
                          <select class="form-select" aria-label="Default select example" id='exampleCitySelector' required>
                            <option disabled hidden selected>Select your city</option>
                            <option value="1">...</option>
                          </select>
                        </div>
                        <div className="row">
                          <div class="mb-3 col-6">
                              <label for="exampleInputName" className="form-label">First Name</label>
                              <input type="text" className='form-control' id="exampleInputName" required/>
                          </div>
                          <div class="mb-3 col-6">
                              <label for="exampleInputName" className="form-label">Last Name</label>
                              <input type="text" className='form-control' id="exampleInputName" required/>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputName" className="form-label">Company Name</label>
                          <input type="text" className='form-control' id="exampleInputName" required/>
                        </div>
                        <div class="mb-3">
                          <label for="inputAddress" class="form-label">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="Street address" required/>
                        </div>
                        <div class="mb-3">
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor (optional)"/>
                        </div>
                        <div className="row">
                          <div class="mb-3 col-6">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" required/>
                          </div>
                          <div class="mb-3 col-6">
                              <label for="exampleInputName" className="form-label">Phone</label>
                              <input type="text" className='form-control' placeholder='Phone Number' id="exampleInputName" required/>
                          </div>
                        </div>
                        <div class="mb-5">
                          <label for="exampleFormControlTextarea1" id='textArea' class="form-label">Order Notes</label>
                          <textarea class="form-control" placeholder='Write your notes here ...' id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type='submit' class="btn btn-primary d-block mx-auto fs-4 px-5">Place Order</button>
                    </form>
        </div>
        </div>
      <Footer/>
    </div>
  )
}
