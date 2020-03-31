import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.title !== nextProps.title;
    }

    render() {
        console.log('child render');
        return (
            <div>
                Child：{ this.props.title }
                <button onClick={ this.props.onEvent.bind(this, 'abc') }>传递数据</button>
            </div>
        );
    }
}

export default Child;