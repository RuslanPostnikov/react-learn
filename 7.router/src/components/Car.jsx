import React from "react";
import './Car.scss';

export default class Car extends React.Component {
    render() {
        return (
            <div className={'Car'}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year <strong>{this.props.year}</strong></p>
            </div>
        );
    }
}
