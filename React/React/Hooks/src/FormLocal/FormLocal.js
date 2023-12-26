import React, { useEffect, useState } from 'react'
import  './style.css'

const FormLocal = () => {
    const[data,setData]=useState([])
    const[localdata,setLocalData]=useState([])

    useEffect(()=>{
        const jsonData=JSON.parse(localStorage.getItem("localdata"))
        if(jsonData){
            setLocalData(jsonData)
        }
        
    },[])

    function handleChange(e){
        setData((prev)=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    
    function handleSubmit(){
        console.log("",data);
        setLocalData((prev)=>{
            const updateData=[...prev,data];
            localStorage.setItem("localdata",JSON.stringify(updateData));
            setData({name:"",email:"",username:'',password:''})
            return updateData;
            
        })
       
    }
  return (
    <div className='main-form-div'>
        <form 
        onChange={handleChange}
         >
            <input type='text' value={data.name} placeholder='Enter your name' name='name'></input>
            <input type='email' value={data.email} placeholder='enter your email' name='email'></input>
            <input type='username' value={data.username} placeholder='enter your username' name='username'></input>
            <input type='password' value={data.password} placeholder='enter your password' name='password'></input>
        </form>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormLocal