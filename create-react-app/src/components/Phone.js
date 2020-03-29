import React, {Component} from 'react';
import {subscribe} from 'pubsub-js';

class Phone extends Component {
    componentDidMount() {
        console.log('match接收到的参数=' + this.props?.match?.params?.id);
        console.log('query接收到的参数=' + this.props?.location?.query?.id);
    }

    constructor(props) {
        super(props);
        this.state = {text: ''};

        subscribe('event', (text) => {
            this.setState({text});
        });
    }

    render() {
        return (
            <div>
                phone get {this.state.text}
            </div>
        );
    }
}

export default Phone;