import React from 'react'
import backgroundPage1 from '../../asset/image/bg-02.jpg'

function TitlePage() {
    return (
        <section class="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${backgroundPage1})`}}>
            <h2 className="ltext-105 cl0 txt-center">
                Blog
            </h2>
        </section>
    )
}

export default TitlePage