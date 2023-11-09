import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'

const CardComponent = () => {
  const location = useLocation()
  const data = location.state
  const[detail,setDetail]=useState([])

  const navigate=useNavigate()

  useEffect(()=>{
    setDetail(data)
  },[])

  function handleDelete(userId){
    fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE',
    })
    .then(()=>setDetail((prev)=>prev.filter((user)=>user.id!==userId)))
    
    // .then((prev)=>console.log("del",prev))
  }

  function handleEdit(userId){

    navigate('/' ,{state:(detail.find((prev)=>prev.id == userId))})
  }

  // console.log(data)

  return (
    <div className='card-show'>
      <div className='card-display container row '>
      {detail.map((user, index) => (
        <div className="card text-center mb-3 col-3 shadow" style={{ "width": "18rem" }}>
          <div className="card-body">
            <img src={user.avatar}></img>
            <h5 className="card-title"><p>{user.first_name} {user.last_name}</p></h5>
            <p className="card-text">{user.email}</p>
            <div className='button-group'>
              <button  className ="btn btn-primary" onClick={()=>handleDelete(user.id)} style={{"width":"100px"}}>Delete</button>
              <button  className ="btn btn-primary" onClick={()=>handleEdit(user.id)} style={{"width":"100px"}}>Edit</button>
            </div>
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}

export default CardComponent