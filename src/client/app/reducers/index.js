import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import actionTypes from '../actionTypes'

var initialState = {
    jokes: [],
    jod: " "
}

function jokes(jks = initialState.jokes, action) {
    switch (action.type) {
        case actionTypes.FETCH_JOKES_SUCCESS:
            return action.jokes;
        default:
            return jks;
    }
}

function jod(j = initialState.jod, action) {
    switch (action.type) {
        case actionTypes.FETCH_JOD_SUCCESS:
            return action.jod;
        default:
            return j;
    }
}

var rootReducer = combineReducers({
    jokes,
    jod,
    routing: routerReducer
});

export default rootReducer;