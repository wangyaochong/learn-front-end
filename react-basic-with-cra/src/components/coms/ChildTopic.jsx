import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Passage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Comment/>
            </div>
        );
    }
}

class Comment extends Component {
    static contextTypes = {
        color: PropTypes.string
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {/*可以通过context跨级取属性*/}
                { this.context.color }
            </div>
        );
    }
};

class ChildTopic extends Component {
    static childContextTypes = {
        color: PropTypes.string
    };

    constructor(props, context) {
        super(props, context);
    }

    getChildContext() {
        return {
            color: 'red'
        };
    }

    render() {
        return (
            <div>
                <Passage/>
            </div>
        );
    }
}

export default ChildTopic;

