import React, { useState } from 'react'


const FormJson = () => {
// const [data,setData]=useState({name:"",email:"",pass:""})
const [data,setData]=useState("")
const[lastdata,setLastdata]=useState("")


    function handle_change(e){
        // alert(e.target.value)
        const[name,value]=[e.target.name,e.target.value]
        // alert(name)
        // alert(value)
        setData((ele)=>({...ele,[name]:value}))
        // setData({[name]:value})
        // setData({name:value})
    }
    function handle_Submit(e){
        e.preventDefault();
        // alert(`name:${data.name}\n email:${data.email}\n pass:${data.password}`)
        setLastdata(`name:${data.name}\n email:${data.email}\n pass:${data.password}`)
        console.log(data);  

    }
    
  return (
    <div>
        <form onSubmit={handle_Submit} onChange={handle_change}>
            <label>Name</label>
            <input type='text' name='name'></input>
            <br/><br/>
            <label>Email</label>
            <input type='email' name='email'></input>
            <br/><br/>
            <label>Password</label>
            <input type='password' name='password'></input>
            <br/><br/>
            <h1>{data.name}</h1>
            <button>Submit</button>
            <h1>{lastdata}</h1>
        </form>
    </div>
  )
}

export default FormJson