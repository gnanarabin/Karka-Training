import React, { useState,createContext,useContext } from 'react'
import Child1 from './Child1'
import Child3 from './Child3'
import Child2 from './Child2'

  
export const userContext = createContext()

const Parent = () => {

  const[name,setName]=useState({name:"Rabin"})
  const[animal,setAnimal]=useState({animal1:"leo",animal2:"tiger"})

  
  return (
    <div>
      <userContext.Provider value={animal}>
          <Child1/>
         
      </userContext.Provider >
    </div>
  )
}

export default Parent