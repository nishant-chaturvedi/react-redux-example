import actionTypes from './actionTypes';

var baseApiUrl = "http://api.icndb.com/";

export function fetchJokes() {
    return function (dispatch) {
        return fetch(baseApiUrl + "jokes/random/5")
            .then(response => response.json())
            .then(json => {
                return dispatch(jokesRecieved(json));
            });
    }
}

export function fetchJOD(){
    return function (dispatch) {
        return fetch(baseApiUrl + "jokes/random")
            .then(response => response.json())
            .then(json => {
                return dispatch(jodRecieved(json));
            });
    }
}

function jokesRecieved(jokes) {
    return {
        type: actionTypes.FETCH_JOKES_SUCCESS,
        jokes: jokes.value.map(j => {
            return {
                id: j.id,
                joke: j.joke
            }
        })
    }
}

function jodRecieved(jod){
    return {
        type: actionTypes.FETCH_JOD_SUCCESS,
        jod: jod.value.joke
    }
}