import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import todoReducer from './todo';
import todoInputReducer from './todoInput';
import categoryInputReducer from './categoryInput';

const rootReducer = combineReducers({
    todoReducer, 
    todoInputReducer,
    categoryInputReducer,
    pender: penderReducer
});

export default rootReducer