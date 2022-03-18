import './App.scss';
import {Route, useNavigate, Routes} from "react-router-dom";
import Cars from "./components/Cars";
import About from "./components/About";
import Layout from "./hoc/Layout";
import CarDetail from "./components/CarDetail";
import RequireAuth from "./hoc/RequireAuth";


function App() {
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/');
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<h1>Home Page</h1>}/>
                    <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
                    <Route path="cars" element={<Cars toHomepage={goToHomepage}/>}/>
                    <Route path='cars/:name' element={<CarDetail />}/>
                    <Route path='*' element={<h1 style={{color: 'red'}}>Page not fond 404</h1>}/>
                </Route>
            </Routes>
        </div>
      );
}

export default App;
