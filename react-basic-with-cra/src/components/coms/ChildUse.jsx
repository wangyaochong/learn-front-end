import React, { Component, useReducer, useState, useCallback, useContext } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { count: action.data };
        case 'sub':
            return { count: action.data };
        default:
            return 1000;
    }
}

const MyContext = React.createContext();
const ChildChild = () => {
    return (
        <div>
            { useContext(MyContext) }
            <ChildChildChild/>
        </div>
    );
};
const ChildChildChild = () => {
    return (
        <div>
            { useContext(MyContext) }
        </div>
    );
};

const ChildUse = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    //useReducer可以使用回调函数初始化state，初始化回调函数的优先级比初始化参数的优先级高
    const [state, dispatch] = useReducer(reducer, { count: 2 }, () => {
        return { count: 3 };
    });
    return (
        <div>
            <h1>测试useCallBack</h1>
            <div>
                <p>{ count }</p>
                <button onClick={ () => setCount(count + 1) }>count+1</button>
                <p>{ count2 }</p>
                <button onClick={ useCallback(() => {
                    setCount2(count2 + 1);
                }, [count]) }>count2+1
                </button>
                <p>{ state.count }</p>
                <button onClick={ () => dispatch({ type: 'add', data: state.count + 1 }) }>count3+1</button>
                <button onClick={ () => dispatch({ type: 'sub', data: state.count - 1 }) }>count3-1</button>
                <MyContext.Provider value={ 'contextValue' }>
                    <ChildChild/>
                </MyContext.Provider>
            </div>
        </div>
    );
};


export default ChildUse;