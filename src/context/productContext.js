import React, { createContext, useState } from 'react';


export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const [products, setProduct] = useState([]);

    return (
        <ProductsContext.Provider value={[products, setProduct]} >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;
