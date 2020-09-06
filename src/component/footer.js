
import React from 'react';

const footerSection = () => {
    return(
        <footer className="footer-area bg-gray pt-120 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact-info-wrap">
                            <div className="footer-logo">
                                <a href="#"><img src="assets/images/logo/logo.png" alt="logo"/></a>
                            </div>
                            <div className="single-contact-info">
                                <span>Our Location</span>
                                <p>869 General Village Apt. 645, Moorebury, USA</p>
                            </div>
                            <div className="single-contact-info">
                                <span>24/7 hotline:</span>
                                <p>(+99) 052 128 2399</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-right-wrap">
                            <div className="footer-menu">
                                <nav>
                                    <ul>
                                        <li><a href="index.html">home</a></li>
                                        <li><a href="shop.html">My account</a></li>
                                        <li><a href="shop.html">Supplier </a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="social-style-2 social-style-2-mrg">
                                <a href="#"><i className="social_twitter"/></a>
                                <a href="#"><i className="social_facebook"/></a>
                                <a href="#"><i className="social_googleplus"/></a>
                                <a href="#"><i className="social_instagram"/></a>
                                <a href="#"><i className="social_youtube"/></a>
                            </div>
                            <div className="copyright">
                                <p>Copyright © 2020 HasThemes | <a href="https://hasthemes.com/">Built
                                    with <span>Norda</span>
                                    by HasThemes</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default footerSection;
