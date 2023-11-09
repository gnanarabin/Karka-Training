import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate=useNavigate()
    const data=JSON.parse(localStorage.getItem("userdata"))
    const[logindata,setLoginData]=useState("")


    function handle_change(e){
        setLoginData((prev)=>{
            return({...prev,[e.target.name]:e.target.value})
        })
    }

    function handle_submit(e) {
        e.preventDefault();
      
        if (logindata.username && logindata.pass) {

          const matchedUser = data.find((prev) =>
            prev.username === logindata.username && prev.pass === logindata.pass
          );      
          if (matchedUser) {
            navigate('/data', { state: matchedUser });
            
          } else if(logindata.username=="admin" && logindata.pass=="1234") {
            navigate('/data',)
            console.log("same");
          }
        } else {
          alert("Enter username and password");
        }
      }
      
    return (
        <div className='main-div'>
            <form onSubmit={handle_submit} onChange={handle_change}>
                <div className='login-font'>
                    <p>Login</p>
                    <hr></hr>
                </div>
                <div className='label-div'>
                    <label>Username : </label>
                </div>
                <div className='input-div'>
                    <input type='text' id='username' name='username' placeholder='enter your username...'></input>
                </div>
                <div className='label-div'>
                    <label>Password : </label>
                </div>
                <div className='input-div'>
                    <input type='password' id='pass' name='pass' placeholder='enter the password...'></input>
                </div>

                <div className='btn-div'>
                    <button>Login</button>
                </div>
                <br></br>
                <div>
                    <p>did you register your account? ? <span><Link to={"/"}>Register </Link></span></p>
                </div>

            </form>
        </div>
    )
}

export default LoginForm ;