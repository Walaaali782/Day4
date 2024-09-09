import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';
import Product from "./components/3-product/Product";

import Services from './components/6-Services/Services';
import ServicesList from './components/6-Services/ServicesList';

import ProductDetails from './components/8-ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<>
   
          <Product />
        </>} />
    

    
        <Route path="/Services" element={<>
          <Services />
          <ServicesList/>
        </>} />
  
 


        <Route path="/:productId" element={<>
          <ProductDetails />
        </>} />




      </Routes>

     
    </div>
  );
}

export default App;
