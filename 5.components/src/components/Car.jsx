import React from "react";
import './Car.css';
import withClass from "../hoc/withClass";

class Car extends React.Component {

    render() {
        const inputClasses = ['input'];

        this.props.name.length ? inputClasses.push('green') : inputClasses.push('red');

        if(this.props.name.length > 4) inputClasses.push('bold');

        return (
            <>
                <h3>Car name: {this.props.name}</h3>
                <p>Year <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </>
        );
    }
}

export default withClass(Car, 'Car');
