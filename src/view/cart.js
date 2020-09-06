import React from 'react';

import HeaderSection from './../component/header';
import FooterSection from './../component/footer';

const cart = () => {
    return(
        <div>
            <HeaderSection/>

            <div className="cart-main-area pt-115 pb-120">
                <div className="container">
                    <h3 className="cart-page-title">Your cart items</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div className="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Until Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th>action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="assets/images/cart/cart-1.jpg" alt=""/></a>
                                            </td>
                                            <td className="product-name"><a href="#">Simple Black T-Shirt</a></td>
                                            <td className="product-price-cart"><span className="amount">$260.00</span>
                                            </td>
                                            <td className="product-quantity pro-details-quality">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                           value="1" />
                                                </div>
                                            </td>
                                            <td className="product-subtotal">$110.00</td>
                                            <td className="product-remove">
                                                <a href="#"><i className="icon_close"/></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cart-shiping-update-wrapper">
                                            <div className="cart-shiping-update">
                                                <a href="#">Continue Shopping</a>
                                            </div>
                                            <div className="cart-clear">
                                                <button>Update Cart</button>
                                                <a href="#">Clear Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="grand-totall">
                                        <div className="title-wrap">
                                            <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                        </div>
                                        <h5>Total products <span>$260.00</span></h5>
                                        <div className="total-shipping">
                                            <h5>Total shipping</h5>
                                            <ul>
                                                <li><input type="checkbox"/> Standard <span>$20.00</span></li>
                                                <li><input type="checkbox"/> Express <span>$30.00</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="grand-totall-title">Grand Total <span>$260.00</span></h4>
                                        <a href="#">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection/>

        </div>
    )
} ;

export default cart;