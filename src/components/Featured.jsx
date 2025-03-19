import React from 'react'
import data from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Featured.css'
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/actions/actionTypes'
import Swal from 'sweetalert2';

export default function Featured() {

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
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div>
      <div className="container section-box">
        <h4 className='fw-bold text-center'>FEATURED PRODUCTS</h4>
        <div className="line mt-3 mb-4"></div>
        <Slider className='slider-box' {...settings}>
          {data.map((item)=>{
            return(
              <div>
                <div>
                  <img className='img-slider' src={item.img} alt={item.alt} />
                </div>
                <NavLink to={`/shop/${item.id}`} className='d-block text-center fs-3 text-decoration-none text-uppercase mt-3 item-name'>{item.name}</NavLink>
                <hr className='w-50 mx-auto' />
                <p onClick={()=>{dispatch(addToCart(item)) 
                  alertFunc()}} className='text-center fw-bold mt-4 fs-5'>{item.price} JD <button className='mx-1'><i class="fas fa-cart-plus"></i></button></p>
                <span className='bg-danger text-light rounded-pill  px-3'>HOT</span>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
