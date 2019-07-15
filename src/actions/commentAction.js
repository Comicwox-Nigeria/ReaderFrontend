import axios from 'axios';

import {
    GET_ERRORS,
    LOADING,
    GET_A_COMIC
} from "./types";


//  Remove reader's favorite

export const addCommentUnderComic = (commentData, id) => dispatch => {

    dispatch(setLoading());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addCommentUnderComic/${id}`, commentData)
        .then(res => {
            dispatch({
                type: GET_A_COMIC,
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


//  Remove reader's favorite

export const addCommentUnderComicAndChapter = (commentData, id) => dispatch => {

    dispatch(setLoading());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addCommentUnderComicAndChapter/${id}`, commentData)
        .then(res => {
            dispatch({
                type: GET_A_COMIC,
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
