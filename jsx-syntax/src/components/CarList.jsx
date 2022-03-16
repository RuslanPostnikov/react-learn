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
            pageTitle: 'React Components',
            showCars: false
        };
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

    render() {
        // let cars = null;
        //
        // if(this.state.showCars) {
        //     cars = this.state.cars.map((car, index) => {
        //         return (
        //             <Car
        //                 key={index}
        //                 name={car.name}
        //                 year={car.year}
        //                 onChangeTitle={() => this.changeTitleHandler(car.name)}
        //             />
        //         );
        //     })
        // }

        return (
            <>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                { this.state.showCars ?
                    this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={() => this.changeTitleHandler(car.name)}
                            />
                        );
                    })
                    : null
                }
            </>
        );
    }
}
