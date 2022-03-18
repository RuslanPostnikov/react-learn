import './App.scss';
import {Route, BrowserRouter, Routes, NavLink} from "react-router-dom";
import Cars from "./components/Cars";
import About from "./components/About";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <nav className="nav">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink
                    to="/about"
                >About</NavLink></li>
                <li><NavLink
                    to={{
                        pathname: "/cars",
                        search: '?a=1&b=2',
                        hash: 'wfm-hash'
                    }}
                >Cars</NavLink></li>
            </ul>
          </nav>

          <hr/>
            <Routes>
                <Route path="/" exact element={<h1>Home Page</h1>}/>
                <Route path="/about" element={<About />} />
                <Route path="/cars" element={<Cars />}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
