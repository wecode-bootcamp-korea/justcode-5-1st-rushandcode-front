import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import ScrollToTop from '../components/Scroll/ScrollRestoration';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import Event from '../pages/Event/Event';
import EventDetail from '../pages/EventDetail/EventDetail';
import Cart from '../pages/Cart/Cart';
import Search from './Search/Search';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/event" element={<Event />} />
        <Route path="/eventDetail/:id" element={<EventDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
