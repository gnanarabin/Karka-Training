import { faCartArrowDown, faTrash, faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './style.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const ProductFont = () => {
  const[value,setValue]=useState(2)

  function handleIncrease(){
    // setValue((prev)=>prev+1)
    setValue(value+1)
  }
  function handleDecrease(){
    setValue(value-1)
  }



  return (
    <div>
      <FontAwesomeIcon icon={faGoogle} style={{ opacity: 0.2, color: "red" }} className='font' />
      <img src='Images/1.png'></img>
      <div className="input-group mb-3" >
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div class="input-group search mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>

      <div className='search-div'>
        <input type='text' placeholder='Search'></input>
        <button>Submit</button>
      </div>

      <div className='dis-div'>
        <div>discount</div>
        <div>50%</div>
      </div>

      <div className='btn-div' >
        <button style={{borderRadius:"20px 0px 0px 20px"}} onClick={handleDecrease}>-</button>
        {/* <button>2</button> */}
        <span>{value}</span>
        <button style={{borderRadius:"0px 20px 20px 0px"}} onClick={handleIncrease}>+</button>
      </div>
    </div>
  )
}

export default ProductFont