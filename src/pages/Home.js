import React from 'react'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Productview from '../component/Productview'
import Sliders from '../component/Sliders'



function Home() {
  return (
    <div className='Home'>
        <Sliders />
        <Banner />
        <Productview />
        <Footer />
    </div>
  )
}

export default Home