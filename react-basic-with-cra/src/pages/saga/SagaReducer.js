export default function defReducer(state ={}, action) {

    if (action.type === 'login_success') {
        console.log('login_success', action);
        return action;
    }else{
        console.log("other action",state,action);
    }
    return Object.assign({}, state, action);
}