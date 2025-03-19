import React, { useEffect, useState } from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom'
import data from '../data'
import Aos from 'aos'
import 'aos/dist//aos.css'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/actions/actionTypes'
import Swal from 'sweetalert2'

export default function Products() {
  
    const [sortType , setSortType] = useState('')

    const sortFunc = (event)=>{
        setSortType(event.target.value);
        switch (event.target.value) {
        case "low":
            return data.sort((x,y) => x.price-y.price);
        case "high":
            return data.sort((x,y) => y.price-x.price);
        default:
            return data;
        }
    }

    useEffect(()=>{
        Aos.init()
    },[])

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
    <div className='shop-section position-relative'>
      <div className="container">
        <div className="d-flex justify-content-between mb-5">
            <div className='navigation-btn'>
                <NavLink className="text-decoration-none" to="/">Home</NavLink> / 
                <NavLink className="text-decoration-none text-dark" to="/shop"> Shop</NavLink>
            </div>
            <div className="shop-selector">
                <select onChange={sortFunc} className='text-center'>
                    <option selected disabled hidden>Sort</option>
                    <option value="low">Low price</option>
                    <option value="high">High price</option>
                </select>
            </div>
        </div>
        <div className="products-box">
            <div className="row row-cols-1 row-cols-lg-4">
                {data.map((item)=>{
                    return(
                        <div className="col">
                            <div className="product-box p-3 mb-5" data-aos = 'fade-up'>
                                <img src={item.img} className='product-image mb-5' alt={item.alt} />
                                <NavLink to={`/shop/${item.id}`} className='fs-3 text-decoration-none position-absolute z-1 item-name2 item-name'>{item.name}</NavLink>
                                <p className='text-end fw-bold mt-5'>{item.price} JD</p>
                                <div className="hover-overlay d-flex justify-content-center align-items-center">
                                    <button onClick={()=>{dispatch(addToCart(item))
                                        alertFunc()
                                    }} className='main-button py-2'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
      <a href="#" className='up-button'><i class="fas fa-caret-square-up"></i></a>
    </div>
  )
}