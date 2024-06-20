import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import ProductDetails from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/category';
import CartContextsProvider from './components/contexts/cartContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextsProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='products/:productId' element={<ProductDetails />}/>
      <Route path='categories/:categoryId' element={<Category/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextsProvider>
  </React.StrictMode>
);
