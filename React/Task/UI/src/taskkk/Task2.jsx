import React from 'react'
import {Task} from "./Task"
import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"

export const Task2 = () => {
  return (
    <Router>
    <div> 
    {/* <Nav>
      <Link to="/" ></Link>
   </Nav> */}

        <Routes>
            <Route path='/Task'element={<Task/>}></Route>
        </Routes>
      
      <Task/>
    </div>
    </Router> 
  )
}
