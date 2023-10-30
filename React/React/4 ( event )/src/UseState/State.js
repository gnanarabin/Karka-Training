import React, { useState } from 'react'

const State = () => {
    const[num,setNum]=useState(0)
    // const[name,setName]=useState("Rabin")

    function handle_click(){
        setNum(num+1)
        console.log(num);
        // setName("JN")
        // console.log(name);
    }
  return (
    <div>
        <h3>{num}</h3>
        <button onClick={handle_click}>Add More</button>

    </div>
  )
}

export default State