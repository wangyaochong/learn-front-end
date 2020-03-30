import React, {Component} from 'react';

class SetStateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    async increment() {
        await this.setStateAsync({count: this.state.count + 1});
        console.log(this.state.count);
    }

    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>加一</button>
            </div>
        );
    }
}


export default SetStateDemo;