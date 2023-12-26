import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Shop'
import Main from './Main'

const RoutesPath = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutesPath