import React, { useState } from 'react'

const Display = () => {
    const [data,setData]=useState("")
    const [error,setError]=useState("")
   

    function handle_change(e){

        const[name,value]=[e.target.name,e.target.value]
        
        setData((ele)=>({...ele,[name]:value}))



        if(data.username){
            if((data.username).length<5){
                setError("Enter above 5 charactor")
           }
           else{
                setError("done")
           }
        }

    }
    function handle_submit(e){
        e.preventDefault();
    }
  return (
    <div className='main-div'>
        <form className='valid-form' onChange={handle_change} onSubmit={handle_submit}>
            <br/><br/>
            <label>Username : </label>
            <input type='text' name='username'></input>
            <p style={{"color":"red"}}>{error}</p>
            <label>Email : </label>
            <input type='email' name='email'></input>
            <br/><br/>
            <label>Password : </label>
            <input type='password' name='password'></input>
            <p>{(data.password)? (data.password).length>5 ? "strong password" : "weak password":"" }</p>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Display