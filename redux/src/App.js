import React from "react";
import {connect} from "react-redux";
import './App.css';

class App extends React.Component {

  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // })
  }

  render() {
    return (
        <div className="App">
          <h1>Counter <strong>{this.props.counter}</strong></h1>
          <hr/>
          <div className="Actions">
            <button onClick={() => this.updateCounter(1)}>Add 1</button>
            <button onClick={() => this.updateCounter(-1)}>Minus 1</button>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(App);
