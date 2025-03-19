import React, { useState } from 'react'
import './Forms.css'

export default function Forms() {
  
    const [username , setUsername] = useState('')
    const [city , setCity] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmed , setConfirmed] = useState('')
    const [notmatched , setNotmatched] = useState(false)

    const regSubmit = (e)=>{
        e.preventDefault()
        if(password !== confirmed){
            setNotmatched(true)
        }else{
            localStorage.setItem('name' , username)
            localStorage.setItem('city' , city)
            localStorage.setItem('email' , email)
            sessionStorage.setItem('email', email);
            localStorage.setItem('password' , password)
            localStorage.setItem('userCart' , [])
            if(localStorage.getItem('cart')){
                window.location = '/checkout'
            }else{
                window.location = '/account'
            }
        }
    }

    const [emailLogin , setEmailLogin] = useState('')
    const [passwordLogin , setPasswordLogin] = useState('')
    const [notEmail , setNotEmail] = useState(false)
    const [notPassword , setNotPassword] = useState(false)

    const loginSubmit = (e)=>{
        e.preventDefault()
        const userEmail = localStorage.getItem('email')
        sessionStorage.setItem('email', userEmail);
        const userPassword = localStorage.getItem('password')
        if(userEmail !== emailLogin){
            setNotEmail(true)
        }else if(userEmail === emailLogin && userPassword !== passwordLogin){
            setNotPassword(true)
        }else if(userEmail === emailLogin && userPassword === passwordLogin){
            localStorage.setItem('userCart' , [])
            if(localStorage.getItem('cart')){
                window.location = '/checkout'
            }else{
                window.location = '/account'
            }
        }
    }

    return (
    <div className='forms-section'>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 justify-content-around">
            <div className="col col-lg-4">
                <div className="register-form">
                    <form onSubmit={regSubmit}>
                        <label className='form-border-label'>Registeration</label>
                        <div class="mb-3">
                            <label for="exampleInputName" className="form-label">Username</label>
                            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className='form-control' id="exampleInputName" required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputName" className="form-label">City</label>
                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" className='form-control' id="exampleInputName" required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" required/>
                        </div>
                        <div class="mb-5">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input value={confirmed} onChange={(e)=>setConfirmed(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" required/>
                            {notmatched ? <p className='text-danger mt-2'>Not matched password</p> : null}
                        </div>
                        <button type="submit" class="btn btn-primary d-block mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        
            <div className="col col-lg-4">
                <div className="login-form mt-5 mt-md-0">
                    <form onSubmit={loginSubmit}>
                        <label className='form-border-label'>Login</label>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input onChange={(e)=>{setEmailLogin(e.target.value) 
                               setNotEmail(false)}
                            } type="email" class="form-control" id="exampleInputEmail1" required/>
                            {notEmail ? <p className='text-danger mt-2'>This email doesn't have an account</p> : null}
                        </div>
                        <div class="mb-5">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input onChange={(e)=>{setPasswordLogin(e.target.value)
                                setNotPassword(false)
                            }} type="password" class="form-control" id="exampleInputPassword1" required/>
                            {notPassword ? <p className='text-danger mt-2'>Check your password again</p> : null}
                        </div>
                        <button type="submit" class="btn btn-primary d-block mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
