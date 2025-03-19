import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { addToCart , clearCart, delFromCart, removeProduct } from '../redux/actions/actionTypes'
import Swal from 'sweetalert2'

export default function Cart() {
  
    const cart = useSelector((state) => state)
    var cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : cart
    
    let totalPrice = 0
    cartProducts.map((item)=>{
        return totalPrice += (item.count * item.price)
    })

    const dispatch = useDispatch()

    return (
    <div>
      <table class="table table-striped table-bordered">
            <thead className='text-center'>
                <tr className='table-dark'>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map((item)=>{
                    return(
                        <tr className='align-items-center'>
                            <td width={200}><div className='fs-3'>{item.name}</div></td>
                            <td width={200}><div><img src={item.img} className='cart-image' alt={item.alt} /></div></td>
                            <td width={200}><div className='fw-bold'>{item.price} JD</div></td>
                            <td width={200}><div className='plus-minus-btns'><button onClick={()=>dispatch(delFromCart(item))} className='btn btn-danger'><i class="fas fa-minus"></i></button> <span>{item.count}</span> <button onClick={()=>dispatch(addToCart(item))} className='btn btn-primary'><i class="fas fa-plus"></i></button></div></td>
                            <td width={200}><div><button onClick={()=> Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(removeProduct(item))
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                }
                            })
                               
                            } className='btn btn-danger'><i className="far fa-trash-alt"/></button></div></td>
                        </tr>
                    )
                })}
                <tr scope='row'>
                <td colspan="3" class="table-active fs-6 fw-bold">Total Price : {totalPrice} JD</td>
                <td colspan="2" class="table-active"><button onClick={()=> Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(clearCart())
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                }
                            })
                               
                            } className='btn btn-danger'>Clear Cart</button></td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}
