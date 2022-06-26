import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import ScrollToTop from '../components/Scroll/ScrollRestoration';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
