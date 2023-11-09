import React from 'react';
import SimpleTable from './SimpleTable';
// import './Data.css';
import './style.css'

function Data() {
  const localdata=JSON.parse(localStorage.getItem("userdata"))
  console.log(localdata);
  const columns = [
    {
      Header: 'firstname',
      accessor: 'firstname',
    },
    {
      Header: 'lastname',
      accessor: 'lastname',
    },
    {
      Header: 'email',
      accessor: 'email',
    },
    {
      Header: 'dob',
      accessor: 'dob',
    },
    {
      Header: 'password',
      accessor: 'pass',
    },
    {
      Header: 'gender',
      accessor: 'gender',
    },
    {
      Header: 'username',
      accessor: 'username',
    },
  ];

  const data = localdata || [
    {
      name: 'No_data',
      age: 'No_data',
    },
    
  ];

  return (
    <div className="Data">
      <h1>Simple React Table</h1>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
}

export default Data;
