import React from "react";
import './Car.css';
import PropTypes from "prop-types";
import withClass from "../hoc/withClass";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }


    componentDidMount() {
        if(this.props.index === 0) this.inputRef.current.focus();

    }

    render() {
        const inputClasses = ['input'];

        this.props.name.length ? inputClasses.push('green') : inputClasses.push('red');

        if(this.props.name.length > 4) inputClasses.push('bold');

        return (
            <>
                <h3>Car name: {this.props.name}</h3>
                <p>Year <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
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

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, 'Car');
