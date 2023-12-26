import React, { useEffect, useState } from 'react'
import './style.css'

const GameXO = () => {

    const[value,setValue]=useState([]);
    const[win,setWin]=useState(null)
    const[row,setRow]=useState([])
    
    
    

    function handleChange(e){
        setValue((prev)=>{
            return ([...prev,{id:e.target.id,value:e.target.value}])
        })

        
    }

    function handleRowChange(e,row){
        

       setRow((prev)=>([...prev,e.target.value]))
       

    }
    console.log(row)

    
    


  return (
    <div className='main-div border d-flex justify-content-center align-item-center'>
        <div className='sub-div ' onChange={handleChange}>
            <div className='input-group1' onChange={(e)=>handleRowChange(e,1)}>
                <input type='text' id='1'></input>
                <input type='text' id="2"></input>
                <input type='text' id="3"></input>
            </div>
            <div className='input-group2' onChange={(e)=>handleRowChange(e,2)}>
                <input type='text' id="4"></input>
                <input type='text' id="5"></input>
                <input type='text' id="6"></input>
            </div>
            <div className='input-group3' onChange={(e)=>handleRowChange(e,3)}>
                <input type='text' id='7'></input>
                <input type='text' id='8'></input>
                <input type='text' id='9'></input>
            </div>
        </div>
    </div>
  )
}

export default GameXO;