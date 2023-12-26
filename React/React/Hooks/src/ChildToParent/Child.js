import React from 'react'

const Child = ({setColor}) => {
    function handle_change(e){
        setColor(e.target.value)
    }
  return (
    <div>
        <input type='text' onChange={handle_change}></input>
    </div>
  )
}

export default Child