import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {hashHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';


import rootReducer from './reducers';

export const store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(hashHistory, store)

