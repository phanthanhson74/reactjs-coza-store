import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <React.Fragment>
            <header>
                <div className="container-menu-desktop">
                    
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">

                            <a href="/" className="logo">
                                <img src="../asset/images/icons/logo-01.png" alt="IMG-LOGO" />
                            </a>

                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <Link to="/">Home</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/">Homepage 1</Link></li>
                                            <li><Link to="/">Homepage 2</Link></li>
                                            <li><Link to="/">Homepage 3</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>

                                    <li className="label1" data-label1="hot">
                                        <Link to="/features">Features</Link>
                                    </li>

                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>

                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                
                            </div>
                            

                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <i className="zmdi zmdi-search"></i>
                                </div>

                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                </div>

                                <a href="/" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                                    <i className="zmdi zmdi-favorite-outline"></i>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="index.html"><img src="../asset/images/icons/logo-01.png" alt="IMG-LOGO" /></a>
                    </div>

                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"></i>
                        </div>

                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a href="/" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                            <i className="zmdi zmdi-favorite-outline"></i>
                        </a>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>


                <div className="menu-mobile">
                    {/* <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>

                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="/" className="flex-c-m p-lr-10 trans-04">
                                    Help & FAQs
                                </a>

                                <a href="/" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>

                                <a href="/" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>

                                <a href="/" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul> */}

                    <ul className="main-menu-m">
                        <li>
                            <Link to="/">Home</Link>
                            <ul className="sub-menu-m">
                                <li><Link to="/">Homepage 1</Link></li>
                                <li><Link to="/">Homepage 2</Link></li>
                                <li><Link to="/">Homepage 3</Link></li>
                            </ul>
                            <span className="arrow-main-menu-m">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </li>

                        <li>
                            <Link to="/product">Shop</Link>
                        </li>

                        <li>
                            <Link to="/features" className="label1 rs1">Features</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                

                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="../asset/images/icons/icon-close2.png" alt="CLOSE" />
                        </button>

                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..." defaultValue="gfgh" />
                        </form>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
