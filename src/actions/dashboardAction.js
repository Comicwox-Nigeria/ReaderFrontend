import axios from 'axios';

import {
    GET_ERRORS,
    LOADING,
    // SET_CURRENT_USER,
    GET_FAV_COMIC,
    GET_DASHBOARD_RECOMMENDED_COMIC, GET_RECOMMENDED
} from "./types";
import {tokenConfig} from "./authAction";




export const editProfile = (profileData, history) => (dispatch, getState) => {
    axios.post(`http://206.189.94.96/api/readersRoutes/readerAuth/editProfile`, profileData, tokenConfig(getState))
        .then(res => {
            dispatch(window.location.href = '/')
        })
        .then(res => {
            dispatch({
                type: GET_RECOMMENDED,
                payload: res.data
            })
        })
        // .catch(err => {
        //     dispatch({
        //         type: GET_ERRORS,
        //         payload: err.response.data
        //     });
        // });
};


//  Get favorite comics of a user

export const getFavorite = username => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/readersRoutes/readerDashboard/getFavorite/${username}`)
        .then(res => {
            dispatch({
                type: GET_FAV_COMIC,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

};



//  Get favorite comics of a user

export const getRecommended = username => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/readersRoutes/readerDashboard/getRecommended/${username}`)
        .then(res => {
            dispatch({
                type: GET_DASHBOARD_RECOMMENDED_COMIC,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

};




export const setLoading = () => {
    return {
        type: LOADING
    }
};
