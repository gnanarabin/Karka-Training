import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { json } from 'react-router-dom'

const Fetchdata = () => {
    const[data,setData]=useState([])
    const[edit,setEdit]=useState("")
    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .then((console.log(data)))

      
        
    },[])

    function handleclick(id){

        setData((prev)=>prev.filter((ele)=>ele.id!=id))

    }
    function handleEdit(id){
      // const user=data.find((ele)=>ele.id==id)
      // setEdit(user.name)

      setEdit(data.find((ele)=>ele.id==id))
    }

    function handlechange(e){
      setEdit({...edit,name:e.target.value})
    }

    function handleSave(){
      setData((prev)=>prev.map((ele)=>ele.id==edit.id ? {...ele,name:edit.name}: ele))
      setEdit({name:''})
    }
    

  return (
    <div>
        
        {data.map((ele)=>(<li>{ele.name}<button onClick={()=>handleclick(ele.id)}>del</button><button onClick={()=>handleEdit(ele.id)}>edit</button></li>))} 
        <input value={edit.name} onChange={handlechange}></input>
        <button onClick={handleSave}>save</button>
    </div>
  )
}

export default Fetchdata