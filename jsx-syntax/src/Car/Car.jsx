import React from "react";

const Car = props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year <strong>{props.year}</strong></p>
    </div>
);

export default Car;