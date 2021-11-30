import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        let currentCount = this.state.count

        this.setState({
            count: currentCount + 1
        });
    };

    decrement = () => {
        let currentCount = this.state.count

        this.setState({
            count: currentCount - 1
        });
    };

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>Count: {this.state.count}</h1>
                </div>
                <div className="container my-3 btn-group">
                    <button className="btn btn-warning btn-lg" type="button" onClick={this.increment}>Increment</button>
                    <button className="btn btn-info btn-lg" type="button" onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter;
