import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Account from '../components/Account'
import Loader from '../components/Loader'

export default function MyAccount() {
  return (
    <div>
      <Navbar/>
      <Account/>
      <Footer/>
    </div>
  )
}
