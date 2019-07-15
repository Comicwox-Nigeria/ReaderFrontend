import axios from 'axios';

import {GET_ERRORS, GET_STUDIOS, GET_STUDIO} from "./types";


// Get studios
export const getStudios = () => dispatch => {
    axios.get(`http://206.189.94.96/api/comicRoutes/studio/getStudios`)
        .then(res => {
            dispatch({
                type: GET_STUDIOS,
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


// Get single studio
export const getStudio = (id) => dispatch => {
    axios.get(`http://206.189.94.96/api/comicRoutes/studio/getStudios/${id}`)
        .then(res => {
            dispatch({
                type: GET_STUDIO,
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

