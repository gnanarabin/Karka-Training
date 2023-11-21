import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import './css/style.css'
import ChatBox from './ChatBox'
import SubChat from './SubChat'

const MainDisplay = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm />}></Route>

          <Route path='/login' element={<LoginForm />}></Route>

          {/* <Route path='/chat' element={<ChatBox />}></Route> */}
          <Route path='/chat' element={<SubChat/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainDisplay