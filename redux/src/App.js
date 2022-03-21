import React from "react";
import {connect} from "react-redux";
import './App.css';
import Counter from './Counter'
import {add, addNumber, sub} from "./redux/actions/actions";

const App = props => {
    return (
        <div className="App">
            <h1>Counter <strong>{props.counter}</strong></h1>
            <hr/>
            <div className="Actions">
                <button onClick={props.onAdd}>Add 1</button>
                <button onClick={props.onSub}>Minus 1</button>
            </div>

            <div className="Actions">
                <button onClick={() => props.onAddNumber(15)}>Add 15</button>
                <button onClick={() => props.onAddNumber(-17)}>Minus 17</button>
            </div>
            <Counter />
        </div>
    )

}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
