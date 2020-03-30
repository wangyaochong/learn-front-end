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
        fetch('/api/list').then((res) => {
            let ok = res.ok;
            if (ok) {
                res.json().then(data => {
                    dispatch(userRequestSuccess(data[0]));
                });
            } else {
                dispatch(userRequestError(res.status));
            }
        }).catch(e => {
            dispatch(userRequestError(e));
            console.log(e);
        });
    };
};

