import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState("")
    const[option,setOption]=useState("")
    const[check,setCheck]=useState("")
    function handle_change(e){
        setName(e.target.value)
        setOption(e.target.value)
    }
    function handle_check(e){
        setCheck(e.target.checked ? check+(e.target.value) : check.replace(e.target.value,("")))
    }

  return (
    <div>
        <form>
            <label>Enter Your Name :</label>
            {/* <input type='text' value={name} onChange={handle_change}></input> */}
            <p>{check}</p>
            {/* <select onChange={handle_change}>
                <option>car</option>
                <option>bike</option>
                <option>bus</option>
            </select> */}

            single<input type='checkbox' value='single' onChange={handle_check}></input>
            mingle<input type='checkbox' value='mingle' onChange={handle_check}></input>

            {/* <input type='radio' value="male" onChange={handle_radio}></input> */}
            {/* <input type='radio' value="female" onChange={handle_radio}></input> */}
        </form>
    </div>
  )
}

export default Form