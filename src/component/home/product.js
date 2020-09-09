/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import { ProductsContext } from '../../context/productContext';
import { CartContext } from '../../context/cartContext';

const Product = () => {
    
    const [products, setProduct] = useContext(ProductsContext)

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    
    useEffect(() => {
        getProduct()
    }, []);
    const getProduct = async () => {
        const response = await fetch("https://emarhzapi.herokuapp.com/api/product");
        const data = await response.json()

        if (data.success === true) {
            setProduct(data.data);
        }
    };

    return (
        <div>
            <div className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {products.map((product, key) => (
                                    <div key={key} className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-product">
                                            <div className="text-center product-img-block">
                                                <Link to={'/'}><img className="img-fluid" alt={product.name} src={product.image} /></Link>
                                            </div>
                                            <div className="text-center product-content">
                                                <h3 className='text-capitalize'>{product.name}</h3>
                                                <div className="product-price"><span>N {product.price}</span></div>
                                            </div>
                                            <div className="text-center product-content-2">
                                                <h3>{product.name}</h3>
                                                <div className="product-price"><span>N {product.price}</span></div>
                                                <div className="add-cart">
                                                    {
                                                        isInCart(product) &&
                                                        <button
                                                            onClick={() => increase(product)}
                                                            className="btn btn-outline-primary btn-sm">Add more</button>
                                                    }

                                                    {
                                                        !isInCart(product) &&
                                                        <button
                                                            onClick={() => addProduct(product)}
                                                            className="btn btn-primary">Add to Cart</button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default Product;
