import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Navbar/Child/Home';
import About from './Components/Navbar/Child/About';
import Products from './Components/Navbar/Child/Products';
import Contact from './Components/Navbar/Child/Contact';
import SingleProduct from './Components/Navbar/Child/SingleProduct';
import Cart from './Components/Navbar/Child/Cart.js';
import Navbar from './Components/Navbar/Parent/Navbar';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components"

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

  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px"
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <GlobalStyle />
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
      </ThemeProvider>
    </>
  );
}

export default App;
