import * as actions from '../actions';

export function add(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actions.add,
                num
            });
        },1000);
    };
    // return {
    //     type: actions.add,
    //     // num: num
    //     num
    // };
}

export function sub(num) {
    return {
        type: actions.sub,
        num
    };
}