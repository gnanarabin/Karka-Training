import {React,useEffect,useRef, useState} from 'react'

const Display = () => {
    const [num,setNum]=useState(0)
    useEffect(()=>{
        alert(num)
        // count.current = count.current + 1
        // alert("You clicked "+ count.current + 'times... ')
  
        
    },[ ])
  return (
    <div>Display</div>
  )
}

export default Display