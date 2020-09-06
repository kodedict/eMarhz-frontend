import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductsContextProvider from './context/productContext';
import CartContextProvider from './context/cartContext';



ReactDOM.render(



  
  <ProductsContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </ProductsContextProvider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
