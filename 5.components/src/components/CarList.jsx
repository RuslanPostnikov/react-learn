import React from "react";
import './CarList.scss';
import Car from "./Car";
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Counter";

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Audi', year: 2018},
                {name: 'Mazda', year: 2010},
                {name: 'BMW', year: 2020},
            ],
            pageTitle: 'React Components',
            showCars: false
        };
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars})
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>

                <Counter />
                <hr/>
                <button
                    style={{marginTop: 20}}
                    className={'button'}
                    onClick={this.toggleCarsHandler}
                >Toggle cars</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    { this.state.showCars ?
                        this.state.cars.map((car, index) => {
                            return (
                                <ErrorBoundary key={index}>
                                    <Car
                                        name={car.name}
                                        year={car.year}
                                        index={index}
                                        onChangeName={e => this.onChangeName(e.target.value, index)}
                                        onDelete={this.deleteHandler.bind(this, index)}
                                    />
                                </ErrorBoundary>
                            );
                        })
                        : null
                    }
                </div>
            </>
        );
    }
}
