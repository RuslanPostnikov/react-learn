import React from "react";
import Counter2 from "./Counter2";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState) => {
           return {
               counter: prevState.counter + 1
           }
        });
    }

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 clicked={this.props.clicked}/>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>
            </>
        );
    }
}
