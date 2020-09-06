
import React from 'react';

const headerSection = () => {
    return(
        <div>
            <header className="header-area">
                <div className="header-large-device">
                    <div className="header-middle">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2">
                                    <div className="logo">
                                        <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="main-menu main-menu-padding-1 main-menu-lh-2">
                                        <nav>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/">Supplier</a></li>
                                                <li><a href="/">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="header-action header-action-flex">
                                        <div className="same-style-2 same-style-2-font-inc">
                                            <a href="login-register.html"><i className="icon-user"></i></a>
                                        </div>
                                        <div className="same-style-2 same-style-2-font-inc header-cart">
                                            <a className="cart-active" href="#">
                                                <i className="icon-basket-loaded"></i><span
                                                className="pro-count purple">02</span>
                                                <span className="cart-amount">$2,435.30</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom header-bottom-ptb">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="categori-search-wrap categori-search-wrap-modify">
                                        <div className="search-wrap-3">
                                            <form action="#">
                                                <input placeholder="Search Products..." type="text" />
                                                <button><i className="lnr lnr-magnifier"/></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-small-device small-device-ptb-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <div className="mobile-logo">
                                    <a href="index.html">
                                        <img alt="" src="assets/images/logo/logo.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="header-action header-action-flex">
                                    <div className="same-style-2 same-style-2-font-inc">
                                        <a href="login-register.html"><i className="icon-user"/></a>
                                    </div>
                                    <div className="same-style-2 same-style-2-font-inc header-cart">
                                        <a className="cart-active" href="#">
                                            <i className="icon-basket-loaded"/><span
                                            className="pro-count purple">02</span>
                                        </a>
                                    </div>
                                    <div className="same-style-2 main-menu-icon">
                                        <a className="mobile-header-button-active" href="#"><i
                                            className="icon-menu"/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="sidebar-cart-active">
                <div className="sidebar-cart-all">
                    <a className="cart-close" href="#"><i className="icon_close"/></a>
                    <div className="cart-content">
                        <h3>Shopping Cart</h3>
                        <ul>
                            <li className="single-product-cart">
                                <div className="cart-img">
                                    <a href="#"><img src="assets/images/cart/cart-1.jpg" alt="" /></a>
                                </div>
                                <div className="cart-title">
                                    <h4><a href="#">Simple Black T-Shirt</a></h4>
                                    <span> 1 × $49.00 </span>
                                </div>
                                <div className="cart-delete">
                                    <a href="#">×</a>
                                </div>
                            </li>
                            <li className="single-product-cart">
                                <div className="cart-img">
                                    <a href="#"><img src="assets/images/cart/cart-2.jpg" alt="" /></a>
                                </div>
                                <div className="cart-title">
                                    <h4><a href="#">Norda Backpack</a></h4>
                                    <span> 1 × $49.00 </span>
                                </div>
                                <div className="cart-delete">
                                    <a href="#">×</a>
                                </div>
                            </li>
                        </ul>
                        <div className="cart-total">
                            <h4>Subtotal: <span>$170.00</span></h4>
                        </div>
                        <div className="cart-checkout-btn">
                            <a className="btn-hover cart-btn-style" href="cart.html">view cart</a>
                            <a className="no-mrg btn-hover cart-btn-style" href="checkout.html">checkout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="clickalbe-sidebar-wrap">
                    <a className="sidebar-close"><i className="icon_close" /></a>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search mobile-header-padding-border-1">
                            <form className="search-form" action="#">
                                <input type="text" placeholder="Search here…" />
                                <button className="button-search"><i className="icon-magnifier" /></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-padding-border-2">
                            <nav>
                                <ul className="mobile-menu">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Supplier</a></li>
                                    <li><a href="/">Contact us</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-contact-info mobile-header-padding-border-4">
                            <ul>
                                <li><i className="icon-phone " /> (+612) 2531 5600</li>
                                <li><i className="icon-envelope-open " /> norda@domain.com</li>
                                <li><i className="icon-home" /> PO Box 1622 Colins Street West Australia</li>
                            </ul>
                        </div>
                        <div className="mobile-social-icon">
                            <a className="facebook" href="#"><i className="icon-social-facebook"/></a>
                            <a className="twitter" href="#"><i className="icon-social-twitter"/></a>
                            <a className="pinterest" href="#"><i className="icon-social-pinterest"/></a>
                            <a className="instagram" href="#"><i className="icon-social-instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default headerSection;
