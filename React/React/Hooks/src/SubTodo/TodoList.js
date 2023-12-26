import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const TodoList = ({todo}) => {
    const[data,setdata]=useState([])
    console.log("props",data);
    useEffect(()=>{
        setdata(todo)
    },[todo])
    return (
        <div>
            <div id="todoConatiner" className="todoContainer position-relative">
               
                <ul className='w-50 mx-auto m-0 p-3'>
                    {data.map((ele, index) =>

                        <li className="list-group-item list-group-item-action list-group-item-primary position-relative d-flex justify-content-between p-2 mt-1 mx-auto " key={index}>

                            <input className="form-check-input mx-3 " type="checkbox" onClick={(e) => handle_check(e, ele.id)}></input>{(edit == ele.id) ? (<> <input type='text' value={edit_input} className='rounded text-center' onChange={(e) => setEdit_input(e.target.value)}></input>
                                <button
                                    className="btn btn-outline-success rounded p-2 ms-2" onClick={() => handle_save(ele.id)}>Save</button> </>) : <span className={(ele.ischecked) ? "text-decoration-line-through" : ""}>{ele.todo}</span>}
                            <div>
                                {/* <button className='me-2 rounded p-2  btn btn-outline-light' onClick={(() => handle_edit(ele.todo, ele.id))}>Edit</button> */}

                                {/* <button className='btn btn-outline-danger rounded p-2 me-3' onClick={(() => handle_delete(ele.id))}>Delete</button> */}
                            </div>
                        </li>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}

export default TodoList