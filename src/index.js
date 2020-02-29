import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware}from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';


//each component sends value to individual reducer with unique action type
const feelingsReducer = (state=null, action)=>{
    if (action.type === 'SET_FEELING'){
        return action.payload;
    }
    return state;
}
const understandingReducer = (state = null, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}
const supportReducer = (state = null, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}
const commentsReducer = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}
const feedbackReducer = (state = {}, action) => {
    if (action.type === 'CONFIRM_FEEDBACK') {
        return action.payload;
    }
    return state;
}
//store gives access to state of all reducers
//logger gives nice console logs, doesn't change functionality of app
const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
