import AccReducer from './acc_reducer';
import CustomerReducer from './customer_reducer';
import {combineReducers} from 'redux';
import customer_reducer from './customer_reducer';
export default combineReducers({
    acc:AccReducer,
    customer:customer_reducer
})
