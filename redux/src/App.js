import React from "react";
import {connect} from "react-redux";
import './App.css';

class App extends React.Component {

    render() {
    return (
        <div className="App">
          <h1>Counter <strong>{this.props.counter}</strong></h1>
          <hr/>
          <div className="Actions">
            <button onClick={() => this.props.onAdd(5)}>Add 1</button>
            <button onClick={this.props.onSub}>Minus 1</button>
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

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD', value: ''}),
        onSub: () => dispatch({type: 'SUB'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
