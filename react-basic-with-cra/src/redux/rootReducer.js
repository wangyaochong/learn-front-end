import { combineReducers } from 'redux';
import counter from './reducers/counter';
import user from './reducers/user';
import sagaReducer from '../pages/saga/SagaReducer'

const rootReducer = combineReducers({
    counter,user,sagaReducer
});
export default rootReducer;