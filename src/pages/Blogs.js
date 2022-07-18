import React from 'react'
import ContentPage from '../component/Blogs/ContentPage'
import Header from '../component/Blogs/Header'
import TitlePage from '../component/Blogs/TitlePage'
import Footer from '../component/Blogs/Footer'

function Blogs() {
  return (
    <div>
        <Header />
        <TitlePage />
        <ContentPage />
        <Footer />
    </div>
  )
}

export default Blogs