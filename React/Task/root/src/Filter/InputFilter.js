import React, { useState } from 'react'
import './style.css'
const InputFilter = () => {
  const data=JSON.parse(localStorage.getItem("userdata"))
  const[name,setName]=useState("")

  function handleChange(e){
    setName(e.target.value)
    // console.log(name);

  }
 
  const filter=data.filter((prev)=>{
    return prev.firstname.includes(name)
  })


  // console.log(filter)

  return (
    <div className='filter'>
      <div>
        <input type='text' placeholder='Search....' onChange={handleChange}></input>

        <ul>
          {filter.map((prev)=><li>{prev.firstname}</li>)}
        </ul>
      </div>


    </div>
  )
}

export default InputFilter