import React, { useState } from "react";

const Login = () => {
    const [valid,setValid]=useState("")
    function handle_change(e){
        setValid(ele=>({...ele,[e.target.name]:e.target.value}))
    }
    function handle_submit(e){
        e.preventDefault();

        const form_data=JSON.parse(localStorage.getItem("form"));

        if(form_data.username!="invalid_username"){

          if(((form_data.username==valid.username) || (form_data.email==valid.username)) && (form_data.password==valid.password)){
            alert("sucessfull-login")
          }
          else{
              alert("username and password dosen't matched")
          }
        }
        else if((form_data.email==valid.email) && (form_data.password==valid.password)){
          alert("sucessfull-login")
        }
        else{
          alert("email and password dosen't matched")
        }
        
        console.log(valid);
    }
  return (
    <div className="login-div">
      <form onSubmit={handle_submit} onChange={handle_change}>
        
          <h2>Login</h2>
          <hr></hr>
          <div className="input-div mt-5">
            <label>Username or Email : </label>
            <input type="text" name="username" placeholder="Enter username or email.."></input>
          </div>
          <br />
          <div className="input-div">
            <label>Password :</label>
            <input type="pass" name="password"></input>
          </div>
          <div className="btn-div">
            <button className="" style={{ width: "200px" }}>
              Login
            </button>
          </div>
        
      </form>
    </div>
  );
};

export default Login;
