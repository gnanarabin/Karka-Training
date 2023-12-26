import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from './images/registration-form-4.jpg'

const LoginForm = () => {

  const navigate=useNavigate()
  
  const [valid, setValid] = useState("")
  const [localdata,setLocalData]=useState([])

  useEffect(()=>{
    const form_data = JSON.parse(localStorage.getItem("user"));
    setLocalData(form_data)
    if(form_data){
      // console.log(form_data)
    }
  },[])
  
  function handle_change(e) {
    setValid(ele => ({ ...ele, [e.target.name]: e.target.value }))
  }


  function handle_submit() {
    console.log("user", valid);
    console.log("local", localdata);

    localdata.forEach((prev)=>{
      if((prev.username==valid.username) && prev.password == valid.password){
        // console.log("same");
        navigate('/chat',{state : prev.username})
      }
      
    })
  
    
  }
  return (

    <div className='w-100 container-fluid login-main-div '>
      <div className='login-sub-div row  '>
        <div className='col-6 content-div  p-4 '  onChange={handle_change}>
          <div className='mt-5'>
            <h2>LOGIN</h2>
          </div>
          <div className='mb-5'>
            <input type="text" name='username' className="form-control" id="" placeholder="Enter Username..."/>
          </div>
          <div className='mb-5'>
            <input type="password" name='password' className="form-control" id="" placeholder="Enter Password..."/>
          </div>
          <div className='col-12 mb-4'>
            <button type="button" className="col-12 btn btn-outline-info"  onClick={handle_submit}>Login</button>
          </div>
          <div>
            <p>did you register your account? ? <span><Link to={"/"}>Register </Link></span></p>
          </div>
        </div>
        <div className='col-6 image-div  p-4'>
          <img className='col-12' src={image}></img>
        </div>
        
      </div>
    </div>
   
  )
}

export default LoginForm