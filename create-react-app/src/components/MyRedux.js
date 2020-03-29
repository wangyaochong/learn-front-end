import React, {Component} from 'react';
import {store} from '../redux/store';
import * as action from '../redux/action';

class MyRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: store.getState()
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({age: store.getState()});
        });
    }

    render() {
        return (
            <div>
                Redux :{this.state.age}
                <button onClick={() => store.dispatch(action.add(1))}>+1</button>
                <button onClick={() => store.dispatch(action.del(1))}>-1</button>
            </div>
        );
    }
}

export default MyRedux;