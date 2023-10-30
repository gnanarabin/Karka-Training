import React, { useEffect, useRef, useState } from 'react'

const Index = () => {
  const input_ref1=useRef(null)
  const input_ref2=useRef(null)
  const input_ref3=useRef(null)

  
  
  function handle_down(e,ref){

    // (e.key == "Enter") ? input_ref2.current.focus() : ""
    if(e.key=="Enter"){

      ref.current.focus()
    }

  }


  return (
    <div className='form-input'>
      <form  >
        <div className='input-div '>
          <label>UserName : </label>
          <input type='text' ref={input_ref1} onKeyDown={(e)=>handle_down(e,input_ref2)} ></input>
        </div>
        <div className='input-div'>
          <label>Email : </label>
          <input type='email' name='email' ref={input_ref2} onKeyDown={(e)=>handle_down(e,input_ref3)} ></input>
        </div>
        <div className='input-div'>
          <label>Password : </label>
          <input type='password' name='password' ref={input_ref3} ></input>
        </div>

      </form>
    </div>
  )
}

export default Index