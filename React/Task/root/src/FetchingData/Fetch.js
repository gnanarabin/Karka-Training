import React, { useEffect, useState } from 'react'

const Fetch = () => {
const [data,setData] = useState('')
    // useEffect(()=>{
        useEffect(()=>{
            fetch('https://reqres.in/api/unknown')
        .then((Response)=>Response.json()
        // .then ((data)=>{
        ).then((data)=>(setData(data.data)))
        },[])
        
      
  return (
    <div>Fetch
       {(data)? <h2>{data.map((info)=>(<li>{info.id}</li>))}</h2>:""}
    </div>
  )
}

export default Fetch