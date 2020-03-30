import { combineReducers } from 'redux';
import counter from './reducers/counter';
import user from './reducers/user';

const rootReducer = combineReducers({
    counter,user
});
export default rootReducer;