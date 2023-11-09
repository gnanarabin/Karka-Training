import React, { useEffect, useState } from 'react';
import '../CURD/style.css'

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const[user,setUser]=useState([])
  const[isEdit,setIsEdit]=useState(false)

  const maxId=Math.max(...data.map(user=>user.id))
  const newId=maxId+1

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((response)=> response.json())
    .then ((data)=> setData(data.data || []))
    .then (()=>(console.log("api",data)));
  },[])

  const handleCreate =()=>{
    fetch('https://reqres.in/api/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log('CREATE',responseData)
      setData([...data,{...responseData,id:newId}]);
      setUser({ first_name: '', last_name: '' }); 
    })
    .catch((error) => {
      console.error('Error creating data:', error);
    });


  }

  function handleChange(e){
    setUser((prev)=>{
      return ({...prev,[e.target.name]:e.target.value})
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    handleCreate()
    // console.log("user",user);
    // console.log("datas",data);
  }

  function handle_delete(userID) {
    fetch(`https://reqres.in/api/users/${userID}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setData((prev) => prev.filter((user) => user.id !== userID));
        } else {
          console.error('Error deleting user');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleEdit(userId){
    // const FindEdit=data.find((user)=>user.id ===userId)
    // if(FindEdit){
    //   setEditUser(FindEdit)
    //   console.log("edit",editUser);
    // }
    setUser(data.find((user)=> user.id== userId))
    // console.log("1",user)

    setIsEdit(true)

  }

  function hanldeUpdate(e){
    e.preventDefault()
   
      fetch(`https://reqres.in/api/users/${user.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(user),
      })
      .then(response=>response.json())
      .then(responseData=>{
        // const updateData=data.map(user=>user.id== responseData.id ? responseData : user);
        // console.log('json',responseData)

        //  OR


        const updateData= data.map((use)=>{
          
          // console.log("use.id",use.id)
          if(use.id == responseData.id){
            return {
              ...use,
              first_name:responseData.first_name,
              last_name:responseData.last_name
            }
          }
          else{
            return use
          }
        })
        setData(updateData)
        setIsEdit(false)
      setUser({ first_name: '', last_name: '' }); 

      })
    
  }
  


  return (
    <div className='fetch'>
      <form onChange={handleChange} onSubmit={(isEdit)? hanldeUpdate : handleSubmit}>
        <ul>
        {(data).map((user, index) => (
            <li key={index} style={{marginBottom:"20px"}}>
              Name: {user.first_name} {user.last_name}<br />
              <button type='button' style={{"width":"100px"}} onClick={()=>handle_delete(user.id)}>Delete</button>
              <button type='button' style={{"width":"100px"}} onClick={()=>handleEdit(user.id)}>Edit</button>
            </li>
            
          ))}
        </ul>
          <label>Firstname</label>
        <input type='text' name='first_name'value={user.first_name} ></input>
        <br></br>
        <br></br>
        <label>last_name</label>
        <input type='text' name='last_name'  value={user.last_name}></input>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CrudComponent;
