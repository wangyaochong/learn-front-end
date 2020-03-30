import * as actions from '../actions';

let initState = {
    user: {},
    error: null,
    isFetching: false
};
const user = (state = initState, action) => {
    switch (action.type) {
        case actions.userRequestSuccess:
            return {
                isFetching: false,
                error: null,
                user: action.user
            };
        case actions.userRequestWaiting:
            return {
                isFetching: true,
                error: null,
                user: action.user
            };
        case actions.userRequestError:
            return {
                isFetching: true,
                error: action.error,
                user: {}
            };
        default:
            return state;
    }
};

export default user;