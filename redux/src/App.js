import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
        <div className="App">
          <h1>Counter <strong>{this.state.counter}</strong></h1>
          <hr/>
          <div className="Actions">
            <button onClick={() => this.updateCounter(1)}>Add 1</button>
            <button onClick={() => this.updateCounter(-1)}>Minus 1</button>
          </div>
        </div>
    )
  }
}

export default App;
