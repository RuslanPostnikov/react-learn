import React from "react";
import Car from "./Car";

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Audi', year: 2018},
                {name: 'Mazda', year: 2010},
                {name: 'BMW', year: 2020},
            ],
            pageTitle: 'React Components'
        };
    }

    changeTitleHandler = (newTitle) => {

        this.setState({
            pageTitle: newTitle
        })
    }

    handleInput = (e) => {
        this.setState({
            pageTitle: e.target.value
        })
    }

    render() {
        const cars = this.state.cars;

        return (
            <>
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
                <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
                />
            </>
        );
    }
}
