import React, { useContext, useState } from 'react';

import { PaystackConsumer } from 'react-paystack';

import { CartContext } from './../context/cartContext'

// import components
import HeaderSection from './../component/header';

import CartItem from './../component/cart/cartItem';

const PAYSTACK_KEY = process.env.REACT_APP_PAYSTACK_KEY;

const Cart = () => { 

    const { cartItems, total, itemsCount, clearCart, handleCheckout  } = useContext(CartContext);

    const [email, setEmail] = useState('')
    const [disable, setDisable] = useState(true)

    // for email validation
    function ValidateEmail(emailValue) {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;
        return re.test(emailValue);
    }

    const checkOut = (e) => {
      
       
        setEmail(e.target.value)

        if (ValidateEmail(email)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }

        
    }

    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: `${total}00`,
        publicKey: PAYSTACK_KEY,
    };

    const componentProps = {
        ...config,
        onSuccess: () => handleCheckout(),
        onClose: () => null
    };

  

    return (
        <div>
            <HeaderSection />
            {cartItems.length > 0 ?
                <div className="mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {cartItems.map(product => <CartItem key={product.id} product={product} />)}
                            </div>
                            <div className="col-md-4"><span>Total item(s)</span>
                                <p>{itemsCount}</p>
                                <span>Amount</span>
                                <p>N {total}</p>
                                <p onClick={clearCart} style={{ border: "2px solid",padding: "10px",marginBottom:"50px",cursor:"pointer" }}>Empty Cart</p>
                               
                                    <div className="form-group">
                                        <input className="form-control"
                                            type="email"
                                            placeholder="Email"
                                            style={{ height: "50px", borderRadius: "0", border: "1px solid rgb(0,6,11)" }}
                                            value={email}
                                            onChange={checkOut}
                                            required
                                        />
                                </div>
                                {disable?
                                    <p className="text-danger">
                                        <em>Kindly input correct email</em>
                                    </p>
                                :''}
                                    <div>
                                        <PaystackConsumer {...componentProps} >
                                            {({ initializePayment }) => <button
                                                className="btn btn-primary"
                                                onClick={() => initializePayment()}
                                            style={{ backgroundColor: "rgb(0,6,11)", height: "50px", width: "100%", border: "none", borderRadius: "0" }}
                                            disabled={disable}
                                                
                                            >Pay with PayStack</button>}
                                        </PaystackConsumer>
                                    </div>
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="container mt-50">
                    <p>Cart is Empty</p>
                </div>
            }
        </div>
    )
 }

export default Cart;