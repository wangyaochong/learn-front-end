import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Parent
                <Child title={'子标题'} onEvent={(e) => this.setState({ 'name': e })}/>
                <div>{this.state?.name}</div>
            </div>
        );
    }
}

export default Parent;