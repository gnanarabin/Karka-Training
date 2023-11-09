import React from 'react'
import Admin from './Admin';
import { useLocation } from 'react-router-dom';

function Data(){
    const location=useLocation()
    const user_data=location.state
    console.log("user_data",user_data);
    // console.log("location",location);
    
  
    const columns= [
        {
        Header: 'firstname',
        accessor: 'firstname',
        },
        {
        Header: 'lastname',
        accessor: 'lastname',
        },
        {
        Header:'email',
        accessor:'email'
        },
        {
        Header:'dob',
        accessor:'dob'
        },
        {
        Header:'gender',
        accessor:'gender'
        },
        {
        Header:'Password',
        accessor:'pass'
        },
        {
        Header:'Username',
        accessor:'username'
        },
        
    ];
    const data= JSON.parse(localStorage.getItem("userdata")) || [
        {
            name: 'No_data',
            age: 'No_data',
        },
    ]
    console.log("data",data)
    return(
        <div className='text-center'>
            <h1>User Detail</h1>
            <Admin columns={columns} data={data} user_data={user_data} />
        </div>
    )
}

export default Data