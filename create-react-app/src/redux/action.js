export const add = (num) => {
    return {type: 'add', data: num};
};

export const del = (num) => {
    return {type: 'del', data: num};
};