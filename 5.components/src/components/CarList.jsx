import React from "react";
import './CarList.scss';
import Car from "./Car";

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Audi', year: 2018},
                // {name: 'Mazda', year: 2010},
                // {name: 'BMW', year: 2020},
            ],
            pageTitle: 'React Components',
            showCars: false
        };
        console.log('CarList constructor')
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

    componentWillMount() {
        console.log('CarList componentWillMount')
    }

    componentDidMount() {
        console.log('CarList componentDidMount')
    }

    render() {
        console.log('CarList render')
        return (
            <>
                <h1>{this.props.title}</h1>
                <button
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
                                <Car
                                    key={index}
                                    name={car.name}
                                    year={car.year}
                                    onChangeName={e => this.onChangeName(e.target.value, index)}
                                    onDelete={this.deleteHandler.bind(this, index)}
                                />
                            );
                        })
                        : null
                    }
                </div>
            </>
        );
    }
}
