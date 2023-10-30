import React, { useState } from 'react'

const CalculatorDisplay = () => {
    const[num,setnum]=useState(0)
    // const[add,setadd]=useState(num)
    
    function handleClick(e){
        // if (!isNaN(e)){
            
            document.getElementsByClassName("display").innerText=setnum(`${num}${e}`)
        // }
        // else if(e=="="){

        // }  

        // else if(isNaN(e)){
        //     setnum(0)
        //     document.getElementsByClassName('display').innerText=setadd(`${add}`+`${e}`)
        // }
    }
    function handle_equal(){
        alert(eval(num))
        try{
            
            setnum(eval(num))
        }
        catch{
            alert("invalid")
        }
    }
    function clear(){
        setnum(0)
    }
  return (
    <>
        <div className='main'>
            <div className='sub-div'>
                <div className='display'>{num}</div>
                <div className="row">
                    <button onClick={()=>clear("cl")}>CL</button>
                    <button onClick={()=>handleClick("del")}>DEL</button>
                    <button onClick={()=>handleClick("%")}>%</button>
                    <button onClick={()=>handleClick("/")}>/</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick(7)}>7</button>
                    <button onClick={()=>handleClick(8)}>8</button>
                    <button onClick={()=>handleClick(9)}>9</button>
                    <button onClick={()=>handleClick("*")}>*</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick(4)}>4</button>
                    <button onClick={()=>handleClick(5)}>5</button>
                    <button onClick={()=>handleClick(6)}>6</button>
                    <button onClick={()=>handleClick("-")}>-</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick(1)}>1</button>
                    <button onClick={()=>handleClick(2)}>2</button>
                    <button onClick={()=>handleClick(3)}>3</button>
                    <button onClick={()=>handleClick("+")}>+</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick(".")}>.</button>
                    <button onClick={()=>handleClick(0)}>0</button>
                    <button onClick={()=>handleClick(handle_equal())}>=</button>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CalculatorDisplay