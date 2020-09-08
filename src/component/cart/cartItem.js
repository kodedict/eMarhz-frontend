import React, { useContext } from 'react';

import { CartContext } from './../../context/cartContext';

const CartItem = ({ product }) => {
    
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img width={'200'} src={product.image} className="img-fluid" alt={product.name} /></td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                            <td>
                                <ul className="list-inline">
                                <li className="list-inline-item">
                                    <button className="btn btn-primary" type="button" style={{ backgroundColor: "rgb(176,9,79)", border: "none", borderRadius: "0" }}
                                        onClick={() => increase(product)}
                                    >
                                        <i className="material-icons">add</i>
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    {product.quantity > 1 &&
                                        <button className="btn btn-primary" type="button" style={{ backgroundColor: "rgb(1,13,25)", border: "none", borderRadius: "0" }}
                                            onClick={() => decrease(product)}
                                        >
                                            <i className="material-icons">remove</i>
                                        </button>
                                    }
                                    {product.quantity === 1 &&
                                        <button className="btn btn-primary" type="button" style={{ backgroundColor: "rgb(1,13,25)", border: "none", borderRadius: "0" }}
                                        onClick={() => removeProduct(product)}
                                        >
                                            <i className="material-icons">delete</i>
                                        </button>
                                    }
                                </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
 }

export default CartItem