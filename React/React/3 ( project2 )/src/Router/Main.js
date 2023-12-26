import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'


const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()

    function handleChange(e) {

        setInputValue(e.target.value)
    }

    function handleClick() {
        if(inputValue){
            navigate('/shop')
        }
    }
    return (
        <div>
            <h5>hi</h5>
            <input onChange={handleChange}></input>
            <br></br>
            <br></br>

            <button onClick={handleClick}>Navigate</button>

        </div>
    )
}

export default Main