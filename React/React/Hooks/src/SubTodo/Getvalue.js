import React, { useEffect, useState } from 'react';
import './style.css';
import TodoList from './TodoList';

const Getvalue = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("sub_todo"));
    if (local) {
      setTodo(local);
    }
  }, []);

  const addToDoItem = () => {
    const todo_value = document.getElementById("todoInputBox").value;
    const Id = todo.length ? Math.max(...todo.map((ele) => ele.id)) + 1 : 1;
    const newTodo = { id: Id, todo: todo_value, status: false };

    setTodo((prev) => [...prev, newTodo]);
    document.getElementById("todoInputBox").value = "";
  };

  useEffect(() => {
    if(todo.length>0){
        localStorage.setItem("sub_todo", JSON.stringify(todo));
    }
  }, [todo]);

  return (
    <div>
      <div className="w-75 mx-auto" id="notification-container"></div>
      <h1 className="text-center mt-5 text-primary">Todo</h1>
      <div className="input-group mb-3 w-50 mx-auto mt-3">
        <input
          type="text"
          id="todoInputBox"
          className="form-control text-center text-primary border-primary"
          placeholder="Enter the todo item..."
          aria-describedby="button-addon2"
        />
        <button
          type="button"
          className="btn btn-outline-primary h-100"
          onClick={addToDoItem}
          id="clear_control_button"
        >
          Add ToDo
        </button>
      </div>
      <TodoList todo={todo}/>
    </div>
  );
};

export default Getvalue;
