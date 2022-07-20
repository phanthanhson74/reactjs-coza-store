import React from 'react'
import banner1 from '../../asset/image/bg-01.jpg'

function TitleAbout() {
  return (
    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${banner1})`}}>
		<h2 className="ltext-105 cl0 txt-center">
			About
		</h2>
	</section>	
  )
}

export default TitleAbout