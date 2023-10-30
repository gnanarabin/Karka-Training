import React, { useRef, useState } from 'react'


const SubIndex = () => {
    // const [index,setIndex]=useState(0)

    const username=useRef(null)
    const email=useRef(null)
    const password=useRef(null)

    const focus=[username,email,password]

    function handle_down(e){
    if(e.key=="Enter"){
        // focus[+e.target.id+1].current.focus()
        if(e.target.id<focus.length-1){
            focus[+e.target.id+1].current.focus()
        }
        else{
            focus[0].current.focus()
        }
        
    }
    
}
  return (
    <div className='form-input'>
      <form onKeyDown={handle_down} >
        <div className='input-div'>
          <label>UserName : </label>
          <input type='text' id={0} name="username" ref={username} ></input>
        </div>
        <div className='input-div'>
          <label>Email : </label>
          <input type='email' id={1} name="email" ref={email}  ></input>
        </div>
        <div className='input-div'>
          <label>Password : </label>
          <input type='password' id={2} name="password" ref={password} ></input>
        </div>

      </form>
    </div>
  )
}

export default SubIndex