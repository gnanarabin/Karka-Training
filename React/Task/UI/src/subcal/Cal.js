import React, { useState } from 'react';

const Cal = () => {
    const [num, setNum] = useState('');
    function handleClick(e){
        
        document.getElementsByClassName("display").innerText=setNum(`${num}${e}`)
        
    }
    
    const handle_equal=(()=>{
        // alert("hi")
        try{
            setNum(eval(num).toString());
        }
        catch(error){
            setNum("Error");
        }
    })

    const handle_clear=(()=>{
        setNum("")
    })

    const handleDel=(()=>{
        setNum(num.slice(0,-1))
    })
    

    return (
        <>
            <div className="main">
                <div className="sub-div">
                    <div className="display">{num}</div>
                    <div className="row">
                        <button onClick={() => handle_clear("cl")}>CL</button>
                        <button onClick={() => handleDel("del")}>DEL</button>
                        <button onClick={() => handleClick('%')}>%</button>
                        <button onClick={() => handleClick('/')}>/</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleClick('7')}>7</button> {/* Pass strings to handleClick */}
                        <button onClick={() => handleClick('8')}>8</button>
                        <button onClick={() => handleClick('9')}>9</button>
                        <button onClick={() => handleClick('*')}>*</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleClick('4')}>4</button>
                        <button onClick={() => handleClick('5')}>5</button>
                        <button onClick={() => handleClick('6')}>6</button>
                        <button onClick={() => handleClick('-')}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleClick('1')}>1</button>
                        <button onClick={() => handleClick('2')}>2</button>
                        <button onClick={() => handleClick('3')}>3</button>
                        <button onClick={() => handleClick('+')}>+</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleClick('.')}>.</button>
                        <button onClick={() => handleClick('0')}>0</button>
                        <button onClick={() => handle_equal()}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cal;
