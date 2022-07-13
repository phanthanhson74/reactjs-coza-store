import React from 'react';
import Slider from 'react-slick';
import background1 from "../asset/image/slide-01.jpg";
import background2 from "../asset/image/slide-02.jpg";
import background3 from "../asset/image/slide-03.jpg";


function Sliders() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section className="section-slide">``
            <div className="wrap-slick1">
                <div className='slick'>
                    <Slider {...settings}>
                        <div className="item-slick1" style={{ backgroundImage: `url(${background1})` }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated " data-appear="fadeInDown" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Women Collection 2018
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="fadeInUp" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            NEW SEASON
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="zoomIn" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1" style={{ backgroundImage: `url(${background2})` }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated " data-appear="rollIn" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Men New-Season
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="lightSpeedIn" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            Jackets & Coats
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="slideInUp" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1" style={{ backgroundImage: `url(${background3})` }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated" data-appear="rotateInDownLeft" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Men Collection 2018
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="rotateInUpRight" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            New arrivals
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated " data-appear="rotateIn" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Sliders