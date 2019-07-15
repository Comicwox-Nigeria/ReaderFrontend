// import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, READER_LOADED, READER_LOADING, SET_CURRENT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    reader: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case READER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case READER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                reader: action.payload
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                reader: action.payload,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isLoading: false
            };

        case SET_CURRENT:
            return {
                ...state,
                ...action.payload,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isLoading: false
            };

        default:
            return state
    }
}
