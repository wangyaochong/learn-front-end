import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Child：{this.props.title}
                <button onClick={this.props.onEvent.bind(this,"abc")} >传递数据</button>
            </div>
        );
    }
}

export default Child;