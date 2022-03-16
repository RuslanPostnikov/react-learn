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



    changeTitleHandler = () => {

        const oldTitle = this.state.pageTitle;

        const newTitle = oldTitle + ' (changed)'

        this.setState({
            pageTitle: newTitle
        })
    }

    render() {
        const cars = this.state.cars;

        return (
            <>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.changeTitleHandler}>Change title</button>

                <Car name={cars[0].name} year={cars[0].year}/>
                <Car name={cars[1].name} year={cars[1].year}/>
                <Car name={cars[2].name} year={cars[2].year}/>
            </>
        );
    }
}
