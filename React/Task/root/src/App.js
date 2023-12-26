import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Index from './InputHighlights/Index';
import SubIndex from './InputHighlights/SubIndex';
import Highlight from './InputHighlights/using_useEffect/Highlight';
import Display from './Ecommerce/Display';
import Fetch from './FetchingData/Fetch';
import DisplayAdmin from './AdminForm/DisplayAdmin';
import Data from './ReactTable/Data';
import InputFilter from './Filter/InputFilter';
import FaqQuestion from './FAQ/FaqQuestion';
import CrudComponent from './CURD/CrudComponent';
import CurdDisplay from './CURD/CurdDisplay';
import MainDisplay from './CHAT/MainDisplay';
import Parent from './PropsDrilling/Parent';
import ProductFont from './task/ProductFont';
import GameXO from './XO/GameXO';

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
      {/* <Display/> */}
      {/* <Fetch/>   */}
      {/* <DisplayAdmin/> */}
      {/* <Data/> */}
      {/* <InputFilter/> */}
      {/* <FaqQuestion/> */}
      {/* <CrudComponent/> */}
      {/* <CurdDisplay/> */}
      <MainDisplay/>
      {/* <ProductFont/> */}
      {/* <Parent/> */}
      {/* <GameXO/> */}
    </div>
  );
}

export default App;
