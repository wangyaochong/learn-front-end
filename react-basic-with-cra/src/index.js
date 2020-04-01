import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
// import counter from './redux/reducers/counter';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import { defSaga } from './pages/saga/Saga';
// const logger = store => next => action => {
//     console.log('dispatch->', action);
//     let result = next(action);
//     console.log('next state->', store.getState());
//     return result;
// };
//
// const error = store => next => action => {
//     try {
//         next(action);
//     } catch (e) {
//         console.log('error->', e);
//     }
// };

// const store = createStore(rootReducer, {}, applyMiddleware(logger, error));
const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = composeWithDevTools({});
// const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleWare)));
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk, sagaMiddleWare)));
sagaMiddleWare.run(defSaga);
store.subscribe(() => {
    // console.log('state', store.getState());
    render();
});


function render() {
    ReactDOM.render(
        <Provider store={ store }>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );
}

render();



