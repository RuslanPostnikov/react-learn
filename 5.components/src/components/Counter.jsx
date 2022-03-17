import React from "react";
import Auxiliary from "../hoc/Auxiliary";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>
            </Auxiliary>
        );
    }
}
