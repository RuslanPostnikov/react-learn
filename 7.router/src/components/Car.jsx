import React from "react";
import './Car.scss';
import {useNavigate} from "react-router-dom";

const Car = props => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/cars/${props.name.toLowerCase()}`)}
            className={'Car'}
        >
            <h3>Car name: {props.name}</h3>
            <p>Year <strong>{props.year}</strong></p>
        </div>
    );
}

export default Car;
