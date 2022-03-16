import './App.css';
import Car from "./Car/Car";

function App() {
  return (
    <div className="App">
        <Car name={'Ford'} year={2018}/>
        <Car name={'Audi'} year={2010}/>
        <Car name={'Mazda'} year={2020}/>
    </div>
  );
}

export default App;
