import React from 'react'
import Banner from '../component/Banner'
import Cart from '../component/Cart'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Productview from '../component/Productview'
import Sliders from '../component/Sliders'



function Home() {
  return (
    <div className='Home'>
        <Header />
        <Cart />
        <Sliders />
        <Banner />
        <Productview />
        <Footer />
    </div>
  )
}

export default Home