import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Cart from '../Cart'
import Display from '../../Rendering_lists /Display'
import DisplayProducts from '../DisplayProducts'

const RoutingEcommerce = () => {

  return (
    <div>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<DisplayProducts />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutingEcommerce