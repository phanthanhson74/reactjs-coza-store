import React from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Sliders from '../component/Sliders'


function Home() {
  return (
    <div className='Home'>
        <Header />
        <Cart />
        <Sliders />
    </div>
  )
}

export default Home