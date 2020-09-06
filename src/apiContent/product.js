import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const ProductsContent = () => {



    const [product, setProduct] = useState([]);

   
    useEffect(() => {
        getProduct()
    },[]);
    const getProduct = async () => {
        const response = await fetch("http://localhost:4000/api/product");
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
                                {product.map((product,key) => (
                                    <div key={key} className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-product">
                                            <div className="text-center product-img-block">
                                                <Link to={'/'}><img className="img-fluid" alt={'ss'} src="assets/img/product-37.jpg" /></Link>
                                            </div>
                                            <div className="text-center product-content">
                                                <h3 className='text-capitalize'>{product.name}</h3>
                                                <div className="product-price"><span>N {product.price}</span></div>
                                            </div>
                                            <div className="text-center product-content-2">
                                                <h3>{product.name}</h3>
                                                <div className="product-price"><span>N {product.price}</span></div>
                                                <div className="add-cart">
                                                    <button className="btn btn-primary">Add to Cart</button>
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

   
};

export default ProductsContent;