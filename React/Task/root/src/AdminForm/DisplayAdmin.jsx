import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import Data from './Data'
import Admin from './Admin'
// import './css/style.css'

// import Data from './Admin'
// import SignupForm from './SignupForm'

const DisplayAdmin = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              
                <Route path='/' element={<RegistrationForm/>}></Route>
                <Route path='/login' element={<LoginForm/>}></Route>
                <Route path='/data' element={<Data/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default DisplayAdmin