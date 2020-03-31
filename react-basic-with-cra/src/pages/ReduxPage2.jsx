import React, { Component } from 'react';
import User from '../components/User';
import * as counterAction from '../redux/actions/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ReduxPage2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={ 'text-center' }>
                    {/*    /!*这个是使用原生redux的路由*/ }
                    <h1 className={ 'jumbotron-heading text-center' }>{ this.props.value }</h1>
                    <p className={ 'text-center' }>
                        <h1 className={ 'jumbotron-heading text-center' }>{ this.props.counter }</h1>
                    </p>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage2);