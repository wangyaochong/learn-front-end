import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../redux/actions/user';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let user = this.props.user;
        // console.log(user);
        //
        const { error, isFetching, user } = this.props;
        let data;
        if (error) {
            data = error;
        } else if (isFetching) {
            data = 'Loading';
        } else {
            data = user?.name;
        }

        return (
            <div>
                User name ss = { data }
                <button onClick={ this.props.userAction.getUser }>获取user，需要开启3100服务器</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return  state.user;
};


const mapDispatchToProps = (dispatch) => {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);