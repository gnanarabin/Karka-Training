import React, { useEffect, useState } from 'react';
import '../CURD/style.css'
import CardComponent from './CardComponent';
import { useLocation, useNavigate } from 'react-router-dom';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })
  const [isEdit, setIsEdit] = useState(false)

  const navigate = useNavigate()

  const maxId = Math.max(...data.map(user => user.id))
  const newId = maxId + 1

  const location = useLocation();
  const editData = location.state

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => setData(data.data || []))
      .then(() => (console.log("api", data)));
  }, [])



  const handleCreate = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log('CREATE',responseData)
        setData([...data, { ...responseData, id: newId }]);
        setUser({ first_name: '', last_name: '', email: '' });
        // navigate('/card', { state: [...data, { ...responseData, id: newId }] })

        console.log("datas", data);
        console.log("user", user)

      })
      .catch((error) => {
        console.error('Error creating data:', error);
      });


  }

  function handleChange(e) {
    setUser((prev) => {
      return ({ ...prev, [e.target.name]: e.target.value })
    })
  }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   handleCreate()
  //   // console.log("user",user);
  //   // console.log("datas",data);
  // }

  function handleSubmit(){
    if(isEdit){
      hanldeUpdate()
    }
    else{
      handleCreate()
    }
  }
  function handleCard(){
    if(isEdit){
      navigate('/card',{state:data})
    }
    else{
      navigate('/card', { state: data } )
    }

  }

  function handleTable(){
    if(isEdit){
      navigate('/table',{state:data})
    }
    else{
      navigate('/table', { state: data } )
    }
  }


  useEffect(() => {
    if(editData){
      setUser(  {...editData})
      setIsEdit(true)
    }
  }, [])

  function hanldeUpdate() {
  
    fetch(`https://reqres.in/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(responseData => {
        const updatedUser = { ...user, ...responseData };
        const updatedData = data.map((use) => {
          if (use.id === updatedUser.id) {
            return updatedUser;
          } else {
            return use;
          }
        });
        setData(updatedData);
        setIsEdit(false);
        setUser({ first_name: '', last_name: '', email: '' });
        // setTimeout(() => {
        //   navigate('/card', { state: updatedData });
        // }, 3000);
      });
  }

  
  
  return (
    <div className='fetch'>
      <div className='form' onChange={handleChange}>
        <div className='heading-div'>
          <h1>Register Form </h1>
        </div>
      
        <div className='label-div'>
          <label>FirstName : </label>
        </div>
        <div className='input-div'>
          <input type='text' name='first_name' value={user.first_name} ></input>
        </div>
        <div className='label-div'>
          <label>LastName : </label>
        </div>
        <div className='input-div'>
          <input type='text' name='last_name' value={user.last_name} ></input>
        </div>
        <div className='label-div'>
          <label>Email : </label>
        </div>
        <div className='input-div'>
          <input type='email' name='email' value={user.email} ></input>
        </div>
        {/* <div className='button-div'>
          <button className="button" type='button'onClick={(isEdit) ? hanldeUpdate : handleSubmit} >LOGIN</button>
        </div> */}

         
        <button type="button" className="btn button " data-bs-toggle="modal" data-bs-target="#exampleModal" 
        onClick={handleSubmit}
        >
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Welcome {user.first_name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Which one do u like to see 
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleTable}>Table View</button>
                <button type="button" className="btn btn-primary"
                 onClick={handleCard}
                 >Card View</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CrudComponent;
