import React from 'react'
import { useLocation} from "react-router-dom"

export const Task = () => {
    let Location=useLocation()
  return (
  
    <div> 
      
  <div>yourpath:{Location.pathname}</div>
    </div>
  )
}
