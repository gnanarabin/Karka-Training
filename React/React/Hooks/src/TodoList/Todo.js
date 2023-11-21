import React, { useState } from 'react'
import { json } from 'react-router-dom';


const Todo = () => {
    const todoItems = localStorage.getItem("todo")
    const parseTodo = todoItems ? JSON.parse(todoItems) : []
    const [todo, setTodo] = useState(parseTodo)
    const [edit, setEdit] = useState(null)
    const [edit_input, setEdit_input] = useState("")


    function addToDoItem() {

        let todo_list = document.getElementById("todoInputBox").value;

        let MaxID = todo.length > 0 ? Math.max(...todo.map((data) => data.id)) + 1 : 1

        if (todo_list.length) {
            setTodo((ele) => ([...ele, { id: MaxID, todo: todo_list, ischecked: false }]));

            document.getElementById("todoInputBox").value = ''
        }
        // else{
        //     document.getElementById("notification-container")
        //         .innerHTML = `<div class="alert alert-secondary alert-dismissible fade show mt-5 p-2 text-center d-flex justify-content-between" role="alert">
        //                         <i class="bi bi-exclamation-circle-fill mx-2"></i>
        //                         <span class="position-absolute top-50 start-50 translate-middle">Please Enter a Valid <strong class="mx-1 text-primary"> ToDo</strong></span>
        //                         <button type="button" class="btn-close pb-1" data-bs-dismiss="alert" aria-label="Close"></button>
        //                     </div>`

        // }


    }
    localStorage.setItem("todo", JSON.stringify(todo))

    function handle_delete(btn_id) {
        // alert(btn_id)
        setTodo(todo.filter((ele) => {
            if (ele.id != btn_id) {
                return ele

            }
        }))
    }

    function handle_edit(todo, edit_id) {
        setEdit(edit_id)
        setEdit_input(todo)
    }

    function handle_save(edit_id) {
        setTodo((prev) => {
            return prev.map((data) =>
                (data.id == edit_id) ?
                    {
                        ...data, todo: edit_input,
                    }
                    :
                    data
            )
        });
        setEdit(null)
    }

    function handle_check(e, check_id) {
        setTodo((prevData) => {
            return prevData.map((data) => {
                if (check_id == data.id) {
                    return {
                        ...data,
                        ischecked: e.target.checked
                    }
                }
                else {
                    return data
                }
            })
        })
    }


    return (
        <div>
            <div className="w-75 mx-auto" id="notification-container"> </div>
            <h1 className="text-center mt-5 text-primary"> Todo</h1>
            <div className="input-group mb-3 w-50 mx-auto mt-3">

                <input type="text" id="todoInputBox" className="form-control text-center text-primary border-primary" placeholder=" Enter the todo item..." aria-describedby="button-addon2" />

                <button type="button" className="btn btn-outline-primary" onClick={addToDoItem} id="clear_control_button">Add ToDo</button>
                {/* <button type="button" className="btn btn-outline-primary"  onClick={handle_show} id="clear_control_button">Show</button> */}
            </div>
            <div id="todoConatiner" className="todoContainer position-relative">
                <ul className='w-50 mx-auto m-0 p-3'>{(todo.map((ele, index) =>

                    <li className="list-group-item list-group-item-action list-group-item-primary position-relative d-flex justify-content-between p-2 mt-1 mx-auto " key={index}>

                        <input className="form-check-input mx-3 " type="checkbox" onClick={(e) => handle_check(e, ele.id)}></input>{(edit == ele.id) ? (<> <input type='text' value={edit_input} className='rounded text-center' onChange={(e) => setEdit_input(e.target.value)}></input>
                            <button
                                className="btn btn-outline-success rounded p-2 ms-2" onClick={() => handle_save(ele.id)}>Save</button> </>) : <span className={(ele.ischecked) ? "text-decoration-line-through" : ""}>{ele.todo}</span>}
                        <div>
                            <button className='me-2 rounded p-2  btn btn-outline-light' onClick={(() => handle_edit(ele.todo, ele.id))}>Edit</button>

                            <button className='btn btn-outline-danger rounded p-2 me-3' onClick={(() => handle_delete(ele.id))}>Delete</button>
                        </div>
                    </li>))}</ul>
            </div>
        </div>
    )
}

export default Todo