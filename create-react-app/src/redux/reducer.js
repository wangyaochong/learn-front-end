var obj = [{
    name: 'abc', age: 18
}];

export function data(state = obj[0].age, action) {
    switch (action.type) {
        case 'add':
            return state + action.data;
        case 'del':
            return state - action.data;
        default:
            return state;
    }
}