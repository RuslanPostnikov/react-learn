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
        return (
            <>
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

                { this.state.cars.map((car, index) => {
                    return (
                        <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                        />
                    );
                }) }
            </>
        );
    }
}
