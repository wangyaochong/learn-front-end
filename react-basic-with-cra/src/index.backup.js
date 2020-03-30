import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers/counter';

//这个文件是使用原生redux做路由的操作
const store = createStore(counter);
store.subscribe(() => {
    console.log('state', store.getState());
    render();
});


function render() {
    ReactDOM.render(
        <App onAdd={() => store.dispatch({ type: 'add' })}
             onSub={() => store.dispatch({ type: 'sub' })}
             value={store.getState()}
        />,
        document.getElementById('root')
    );
}

render();



