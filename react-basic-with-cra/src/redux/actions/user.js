import * as actions from '../actions';

export function userRequestSuccess(user) {
    return {
        type: actions.userRequestSuccess,
        user
    };
}

export function userRequestWaiting(user) {
    return {
        type: actions.userRequestWaiting,
        user
    };
}

export function userRequestError(error) {
    return {
        type: actions.userRequestError,
        error
    };
}


export const getUser = () => {
    return dispatch => {
        dispatch(userRequestWaiting({}));
        fetch('/api/list').then(res => res.json())
            .then(data => {
                dispatch(userRequestSuccess(data[0]));
            }).catch(e => {
            dispatch(userRequestError(e));
            console.log(e);
        });
    };
};

