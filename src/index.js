import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware}from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feelingsReducer = (state='', action)=>{
    if (action.type === 'SET_FEELING'){
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = '', action) => {
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
