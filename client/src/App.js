import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Navbar/Child/Home';
import About from './Components/Navbar/Child/About';
import Products from './Components/Navbar/Child/Products';
import Contact from './Components/Navbar/Child/Contact';
import SingleProduct from './Components/Navbar/Child/SingleProduct';
import Cart from './Components/Navbar/Child/Cart.js';
import Navbar from './Components/Navbar/Parent/Navbar'
import ErrorPage from './ErrorPage';

const App = () => {
  // const Routing = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/products" element={<Products />} />
  //       <Route path="/contact" element={<Contact />} />
  //       {/* <Route path="/products" element={<Products />} /> */}
  //     </Routes>
  //   )
  // }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
