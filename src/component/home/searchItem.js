import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

const Search = ({  product }) => {
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <div  className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="single-product">
                <div className="text-center product-img-block">
                    <Link to={'/'}><img className="img-fluid" alt={product.name} src={ product.image} /></Link>
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
    )
}

export default Search