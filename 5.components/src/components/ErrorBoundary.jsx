import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
        console.log(error, errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1 style={{color: 'red'}}>Smth went wrong</h1>
            );
        }

        return this.props.children;
    }

}
