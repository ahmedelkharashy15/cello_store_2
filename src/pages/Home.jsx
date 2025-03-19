import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Cards from '../components/Cards'
import Channel from '../components/Channel'
import Featured from '../components/Featured'
import Customers from '../components/Customers'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='position-relative'>
      <Main/>
      <Cards/>
      <Featured/>
      <Channel/>
      <Customers/>
      <a href="#" className='up-button'><i class="fas fa-caret-square-up"></i></a>
      </div>
      <Footer/>
    </div>
  )
}
