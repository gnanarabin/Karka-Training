import logo from "./logo.svg";
// import "./App.css";
// import UseEffectComp from './UseEffect/UseEffectComp';
// import Form from './Form/Form';
import FormJson from "./FormJson/FormJson";
// import Display from "./Form1/Display";
import FormValid from "./Form1/FormValid";
import Login from "./Form1/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./TodoList/Todo";
import UseRef from "./UseRef/UseRef";
import Display from "./UseEffect/Display";
import Parent from "./ChildToParent/Parent";
import VirtualDOm from "./VirtualDom_RealDom/VirtualDOm";
import RefAttribute from "./UseRef/RefAttribute";
import ParentComponent from "./UseRef/ParentComponent";
import Fetchdata from "./task/Fetchdata";
import FormLocal from "./FormLocal/FormLocal";
import Getvalue from "./SubTodo/Getvalue";
// import Display from "./UseEffect/Display";


function App() {
  return (
    <div className="App">
      
      {/* <UseEffectComp/> */}
      {/* <Form/> */}
      {/* <FormJson/> */}
      {/* <Display/> */}
      {/* <FormValid/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<FormValid />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <h1>{person}</h1> */}
      {/* <Todo/> */}
      {/* <UseRef/> */}
      {/* <Parent/> */}
      <VirtualDOm/>
      {/* <RefAttribute/> */}
      {/* <ParentComponent/> */}
      {/* <Fetchdata/> */}
      {/* <FormLocal/> */}
      {/* <Getvalue/> */}
    </div>
  );
}

export default App;
