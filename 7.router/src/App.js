import './App.scss';
import Cars from "./components/Cars";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

        <hr/>
        <About />

        <Cars />

    </div>
  );
}

export default App;
