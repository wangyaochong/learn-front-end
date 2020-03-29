import React, {Component} from 'react';
import {publish} from 'pubsub-js';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 123,
            subText: '子组件的数据'
        };
    }

    pubsub=()=>{
        publish("event","同级数据")
    }
    render() {
        return (
            <div>
                news {this.props.text}
                <button onClick={this.props.parentFunc.bind(this, this.state.subText)}>向父组件发送数据</button>
                <button onClick={this.pubsub}>向同级发送数据</button>
            </div>
        );
    }
}

export default News;