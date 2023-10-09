import logo from './logo.svg';
import './App.css';
// import MyButton from './loadjson'
import LoadJSON from './components/LoadJSON';
import Load from './sub comp/Load';
import Display from './sub comp/Display';



function App() {
  return (
    <div className="App">
      <Display />
      {/* <header className="App-header">x
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
    </div>
  );
}

export default App;
