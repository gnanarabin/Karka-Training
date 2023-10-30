import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import { ReactDOM } from "react-dom";
import About from "./components/about";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Url from "./components/url";

function App() {
  return (
    <div className="tag">
      <BrowserRouter>
        {/* {let url=useLocation().pathname} */}

        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Url />
      </BrowserRouter>
    </div>
  );
}

export default App;
