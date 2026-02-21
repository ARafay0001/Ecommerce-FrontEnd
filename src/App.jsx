import React from 'react'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer'

import menBanner from "./Assets/banner_mens.png"
import women_banner from "./Assets/banner_women.png"
import kid_banner from "./Assets/banner_kids.png"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Shop/> */}
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/men' element={<Categories banner={menBanner} category="men"/>}/>
        <Route path='/kids' element={<Categories banner={kid_banner} category="kid"/>}/>
        <Route path='/women' element={<Categories banner={women_banner} category="women"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
