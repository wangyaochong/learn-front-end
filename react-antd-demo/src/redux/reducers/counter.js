import * as actions from '../actions';

const counter = (state = 0, action) => {
    switch (action.type) {
        case actions.add:
            // throw new Error('测试异常');
            return state + action.num;
        case actions.sub:
            return state - action.num;
        default:
            return state;
    }
};

export default counter;