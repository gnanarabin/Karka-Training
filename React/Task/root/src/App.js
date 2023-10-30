import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Index from './InputHighlights/Index';
import SubIndex from './InputHighlights/SubIndex';
import Highlight from './InputHighlights/using_useEffect/Highlight';
import Display from './Ecommerce/Display';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <Index/> */}
      {/* <SubIndex/> */}
      {/* <Highlight/> */}
      <Display/>
      
    </div>
  );
}

export default App;
