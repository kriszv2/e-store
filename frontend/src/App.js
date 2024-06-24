import React, { useState } from 'react';
import './index.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import ProductDetails from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/category';

import Layout from './components/layout';
import { getCategories } from './fetcher';
import Home from './components/home';


function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []})

  React.useEffect(() => {
    const fetchData = async () =>{
      const data = await getCategories()
      setCategories(data)
    }
    
    fetchData()
    
  },[])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout categories={categories}/>}>
      <Route index element={<Home/>}/>
      <Route path='/products/:productId' element={<ProductDetails />}/>
      <Route path='/categories/:categoryId' element={<Category/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
