import './App.css';
import Car from "./Car/Car";

function App() {
  return (
    <div className="App">
        <Car name={'Audi'} year={2018}>
            <p style={{color: 'blue'}}>Test</p>
        </Car>
        <Car name={'Mazda'} year={2010}>
            <p style={{color: 'red'}}>Test</p>
        </Car>
    </div>
  );
}

export default App;
