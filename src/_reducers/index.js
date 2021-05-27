import { combineReducers } from 'redux';
import user from './user_reducer';
import filter from './filter_reducer';

const rootReducer = combineReducers({
    user,
    filter
})

export default rootReducer;