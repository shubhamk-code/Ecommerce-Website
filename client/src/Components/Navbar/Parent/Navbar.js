import React from 'react'
import Home from '../Child/Home'
import Contact from '../Child/Contact'
import Products from '../Child/Products'
import About from '../Child/About'
import SingleProduct from '../Child/SingleProduct'
import Cart from '../Child/Cart'


const Navbar = () => {
    return (
        <div>
            <Home />
            <About />
            <Products />
            <Contact />
            <SingleProduct />
            <Cart />
        </div>
    )
}

export default Navbar