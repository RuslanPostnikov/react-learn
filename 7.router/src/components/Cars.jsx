import React from "react";
import './Cars.scss';
import Car from "./Car";

export default class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Audi', year: 2018},
                {name: 'Mazda', year: 2010},
                {name: 'BMW', year: 2020},
            ],
        }
    }

    render() {
        return (
            <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '20px'
            }}>
                {this.state.cars.map((car, index) => {
                    return (
                        <Car
                            name={car.name}
                            year={car.year}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}
