import './App.scss';
import {Route, NavLink} from "react-router-dom";
import Cars from "./components/Cars";
import About from "./components/About";
import {useNavigate, Routes} from "react-router";

function App() {
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/');
    }

    return (
        <div className="App">
          <nav className="nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink
                    to="/about"
                >About</NavLink></li>
                <li><NavLink
                    to={{pathname: "/cars",}}
                >Cars</NavLink></li>
            </ul>
          </nav>

          <hr/>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/about" element={<About />} />
                <Route path="/cars" element={<Cars onClick={goToHomepage}/>}/>
            </Routes>
        </div>
      );
}

export default App;
