import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrudComponent from './CrudComponent'
import CardComponent from './CardComponent'
import TableComponent from './TableComponent'

const CurdDisplay = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<CrudComponent/>}></Route>
            <Route path='/card' element={<CardComponent/>}></Route>
            <Route path='/table' element={<TableComponent/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default CurdDisplay