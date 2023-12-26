import logo from './logo.svg';
// import './App.css';
import Gallery from './gallery/Gallery';
import Json_Gallery from './gallery/Json_Gallery';
import Is_packed from './is_packed/Is_packed';
import Display from './Rendering_lists /Display';
import Pure from './Pure/Pure';
import Get from './List_of_profilePic/Get';
import Profile from './Props/Profile';
import CalculatorDisplay from './calculator/CalculatorDisplay';
import Cal from './subcal/Cal';
import Display_Color from './Gradient_Color/Display_Color';
import DisplayTree from './RenderTree/DisplayTree';
import Img from './PhotoRendering/Img';
import ToolBar from './RespondingEvents/ToolBar';
import { Task } from './taskkk/Task';
import { Task2 } from './taskkk/Task2';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Cart from './Commerce/Cart';
import DisplayProducts from './Commerce/DisplayProducts';
import RoutingEcommerce from './Commerce/Routes/Routing';
import FontAwesome from './FontAwesome/FontAwesome';



const person={
  name:"Rabin JN",
  age:22,
  theme:{
      backgroundColor:"black",
      color:"white"
  }
};

function App() {
  return (
    <div className="App">
      {/* <Gallery/> */}
      {/* <Json_Gallery data={person}/> */}
      {/* <Is_packed/> */}
      {/* <Display/> */}
      {/* <Pure/> */}
      {/* <Get/> */}
      {/* <Profile/> */}
      {/* <CalculatorDisplay className="main"/> */}
      {/* <Cal/> */}
      {/* <Display_Color/> */}
      {/* <DisplayTree/> */}
      {/* <Img/> */}
      {/* <ToolBar/> */}
      <RoutingEcommerce/>
      {/* <FontAwesome/> */}
      {/* <Task2/> */}
      
    </div>
  );
}







export default App;
