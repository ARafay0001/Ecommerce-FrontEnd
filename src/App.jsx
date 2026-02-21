import React from 'react'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Sign from './Pages/Sign'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Shop/>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/men' element={<Categories category="men"/>}/>
        <Route path='/kids' element={<Categories category="kids"/>}/>
        <Route path='/women' element={<Categories category="women"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
