import React, { Component } from 'react';
import { connect } from 'react-redux';

class SagaPage extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'takeEvery',
            sagaUser: {
                username: 'zs',
                password: '123'
            }
        });
    };

    handleClick2 = () => {
        this.props.dispatch({
            type: 'takeLatest',
            sagaUser: {
                username: 'zs',
                password: '123'
            }
        });
    };
    handleClick3 = () => {
        this.props.dispatch({
            type: 'throttle',
            sagaUser: {
                username: 'zs',
                password: '123'
            }
        });
    };

    handleTake = () => {
        this.props.dispatch({
            type: 'take',
            sagaUser: {
                username: 'zs',
                password: '123'
            }
        });
    };

    render() {
        console.log("render SagaPage");
        return (
            <div>
                <button onClick={ this.handleClick }>Saga点击发送 takeEvery</button>
                <button onClick={ this.handleClick2 }>Saga点击发送 takeLatest</button>
                <button onClick={ this.handleClick3 }>Saga点击发送 throttle</button>
                <button onClick={ this.handleTake }>Saga点击发送 take</button>
                用户名={ this.props.user?.username }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in SagaPage', state);
    return {user:state.sagaReducer.data};
};
export default connect(mapStateToProps)(SagaPage);