import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationForm = () => {

    const [userdata, setUserData] = useState("")

    const [localdata, setLocalData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const jsdata = JSON.parse(localStorage.getItem("userdata"))
        if (jsdata) {
            setLocalData(jsdata)
        }
    }, [])

    function handle_change(e) {
        setUserData((prev1) => {
            return ({ ...prev1, [e.target.name]: e.target.value })
        })
    }

    function handle_check(e){
        if(e.target.checked){
            if(userdata.firstname && userdata.lastname){
                let num=(userdata.dob).slice(8,10)
                setUserData((prev)=>{
                    return({...prev,username:(userdata.firstname).concat((userdata.lastname),num)})
                })
            }
            
        }
        else{
            setUserData((prev)=>({...prev,username:""}))
        }
    }

    function handle_submit(e) {
        e.preventDefault()

        

        if((userdata.firstname && userdata.lastname) && userdata.pass){
            setLocalData((prev)=>{
                return ([...prev,userdata])
            })

            setTimeout(()=>{
                navigate('/login')
            },1000)
        }
        else{
            alert("data dosent matched  or please fill full detail")
        }
    }

    useEffect(() => {

        if (localdata.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(localdata))
        }

    }, [localdata])

    return (
        <div className='main-div'>
            <form onChange={handle_change} onSubmit={handle_submit}>
                <div className='login-font'>
                    <p>Registration Form</p>
                    <hr></hr>
                </div>
                <div className='label-div'>
                    <label>First Name : </label>
                </div>
                <div className='input-div'>
                    <input type='text' name='firstname' id='firstname' placeholder='enter your firstname...'></input>
                </div>
                <div className='label-div'>
                    <label>Last Name : </label>
                </div>
                <div className='input-div'>
                    <input type='text' name='lastname' id='lastname' placeholder='enter your lastname...'></input>
                </div>
                <div className='label-div'>
                    <label>Date of Birth : </label>
                </div>
                <div className='input-div'>
                    <input type='date' name='dob' id='dob' ></input>
                </div>
                <div className='label-div'>
                    <label>Email : </label>
                </div>
                <div className='input-div'>
                    <input type='email' name='email' id='eamil' placeholder='enter your email...'></input>
                </div>
                <div className='label-div'>
                    <label>Password : </label>
                </div>
                <div className='input-div'>
                    <input type='password' name='pass' id='pass' placeholder='enter your password...'></input>
                </div>
                <div className='label-div'>
                    <label>Gender : </label>
                </div>
                <div className='input-div d-flex '>
                    <div>
                        <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="male" />
                        <label class="form-check-label" for="flexRadioDefault1" >
                            male
                        </label>

                    </div>
                    <div>
                        <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            female
                        </label>

                    </div>

                </div>
                
                <div className='input-div'>
                <label>Username </label><input className=" p-0 form-check-input check" type="checkbox" value="" id="flexCheckDefault" onClick={handle_check}></input>
                {/* {userdata.find(prev=>(<p>your username : <span>{prev.username}</span></p>))} */}
                <p>{(userdata.firstname && userdata.lastname && userdata.dob) ?(userdata.username) : <span style={{color:"red"}}>please fill firstname,lastname and dob</span>}</p>
                </div>

                <div className='btn-div'>
                    <button>Submit</button>
                </div>
                <br></br>
                <div>
                    <p>Already Have an account ? <spam><Link to={"/login"}>Login</Link></spam></p>
                </div>



            </form>
        </div>
    )
}

export default RegistrationForm