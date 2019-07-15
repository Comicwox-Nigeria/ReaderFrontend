import {
    LOADING,
    GET_STUDIO,
    GET_STUDIOS
} from '../actions/types';

const initialState = {
    studios: [],
    studio: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_STUDIO:
            return {
                ...state,
                loading: false,
                studio: action.payload
            };

        case GET_STUDIOS:
            return {
                ...state,
                loading: false,
                studios: action.payload
            };

        default:
            return state

    }
}
