import React, { useContext } from 'react'
import {userContext} from "./Parent"

const Child3 = ({name}) => {
    const animal = useContext(userContext)
    
  return (
    <div>
        <h1>child3</h1>
        <h2>{animal.animal1}</h2>
    </div>
  )
}

export default Child3