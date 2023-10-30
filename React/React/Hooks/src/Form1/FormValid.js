import React, { useState } from 'react'
import { Route,Routes,useNavigate,BrowserRouter,  } from 'react-router-dom'
import Login from './Login'

const FormValid = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({childrens:[]})
    const [error,setError]=useState("")
    // const [username,setUsername]=useState("")
    function handle_click(e){
        const [name,value]=[e.target.name,e.target.value]
        setData((ele)=>({...ele,[name]:value}))
    }
    function handle_user(e){
        // var username=(data.firstname).concat(data.lastname)
        
        // console.log(num)
        if(e.target.checked){
            if(data.firstname && data.lastname){
                let num=(data.dob).slice(8,10)
                setData((ele)=>({...ele,username:(data.firstname).concat((data.lastname),num)}))
            }
            else{
                // setError("invalid Username")
            setData((ele)=>({...ele,username:"invalid_username"}))
            }
        }
        else{
            setData((ele)=>({...ele,username:""}))
        }
    } 
    

    function show1(){
        document.getElementById('myDIV').style.display ='none';
    }
    function show2() {
        document.getElementById('myDIV').style.display = 'block';
    }
    function handle_child(){
        let child=document.createElement("div")
        child.innerHTML=`<input type="text" name="childrens" placeholder="childrens"/>`
        document.getElementsByClassName("child-div")[0].appendChild(child)
    }
    function handle_submit(e){
        console.log(data);
        e.preventDefault();

        if(data.password){
            if((data.password==data.confirmpassword) && (data.firstname && data.lastname)){
                navigate('/login')
                localStorage.setItem("form",JSON.stringify(data))
            }
            else{
                alert("invalid data")
            }
        }
        else{
            alert("please fill the content")
        }
        

    }
  return (
    <div className='main-div'>
        <form className='valid-form row' onSubmit={handle_submit} onChange={handle_click} >
            <h1>Register Form</h1>
            <br/><br/>
            <label className='col-6'>First Name :</label>
            <input className='col-6' type='text' name='firstname'></input>
            <p style={{color:"red"}}>{(data.firstname)? ((data.firstname).split("")).map((num)=>isNaN(num)).includes(false)? "it dosent take number !" :"":""}</p>

            <label className='col-6'>Last Name :</label>
            <input className='col-6' type='text' name='lastname'></input>
            <p style={{color:"red"}}>{(data.lastname)? ((data.lastname).split("")).map((num)=>isNaN(num)).includes(false)? "it dosent take number !" :"":""}</p>

            <label className='col-6'>Email :</label>
            <input className='col-6' type='email' name='email' ></input>
            {/* <p>{showNoValidEmail}</p> */}

            <label className='col-6'>D-O-B</label>
            <input  className='col-6' type='date' name='dob'></input>

            <label className='col-6'>Gender</label>
            <label className='col-2'>male</label><input className='col-1' type='radio' value="male" name='gender'></input>
            <label className='col-2'>female</label><input className='col-1' type='radio' value="female" name='gender'></input>

            <label className='col-6'>Martial</label>
            <label className='col-2'>single</label>
            <input className='col-1' type='radio' value="single" name='martial'onClick={show1}></input>
            <label className='col-2'>mingle</label>
            <input className='col-1' id='mingle' type='radio' value="mingle" name='martial' onClick={show2}></input>

            <div className='row' id='myDIV' style={{"display":"none"}}>
                <input className='col-2' type='text' placeholder='Wife Name' name='wifename'></input>
                <input className='col-2' type='text' placeholder='Children' name='childrens'></input>
                <input type='button' value="Add child" className='col-2' onClick={handle_child}></input>
                <div className='child-div row'></div>
            </div>

            <label className='col-6'>password</label>
            <input className='col-6' type='text' name='password'></input>
            <p style={{color:"red"}}>{(data.password)?(data.password).length>5 ? <strong style={{color:"green"}}>"Strong-password"</strong> : "weak-password" : ""}</p>

            <label className='col-6'>Confirm password</label>
            <input className='col-6' type='text' name='confirmpassword'></input>
            <p >{(data.confirmpassword)? (data.password==data.confirmpassword)? "✔" : "✘" : ""}</p>

            <label className='col-4'>Username :</label>
            <input type='checkbox' className='col-4' style={{"width":"20px"}} onChange={handle_user}></input>
            {/* <p className='col-4'>{(data.username) ? data.username : error }</p> */}
            <p className='col-4'>{data.username}</p>
            

            <button style={{'width':'200px'}} className='mx-auto col-12' >Submit</button>
           
            
        </form>
        
    </div>
  )
}

export default FormValid