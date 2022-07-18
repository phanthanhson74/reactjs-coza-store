import React from 'react'
import Footer from '../component/Features/Footer'
import Header from '../component/Features/Header'
import ShoppingCart from '../component/Features/ShoppingCart'

function Features() {
  return (
    <div className='Features'>
        <Header />
        <ShoppingCart />
        <Footer />
    </div>
  )
}

export default Features