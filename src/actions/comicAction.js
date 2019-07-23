import axios from 'axios';

import {
    SET_CURRENT,
    GET_ERRORS,
    GET_FRESH_UPDATE,
    GET_NEW_UPLOADS,
    GET_POPULAR,
    LOADING,
    GET_SEARCHED_COMICS,
    GET_COMIC_WITH_SUB_COMIC,
    GET_COMIC_WITH_SUB_COMIC_CHAPTERS,
    GET_RECOMMENDED,
    GET_A_COMIC,
    GET_A_COMIC_CHAPTER,
    GET_FEATURED,
    CLEAR_ERRORS,
    GET_SUBSCRIPTION_DASH,
    SET_CURRENT_USER
} from "./types";
import jwt_decode from "jwt-decode";

import { tokenConfig } from "./authAction";

//  Get recommended

export const getRecommended = username => (dispatch, getState) => {

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getRecommended/${username}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_RECOMMENDED,
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



//  Get Subscription

export const getSubscriptionForDash = username => (dispatch, getState) => {

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getSubscription/${username}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SUBSCRIPTION_DASH,
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


//  Get featured comic

export const getFeatured = () => dispatch => {

    // dispatch(setLoading());

    // axios.get(`/api/comicRoutes/comic/getFeatured`)
    axios.get('http://206.189.94.96/api/comicRoutes/comic/getFeatured')
        .then(res => {
            dispatch({
                type: GET_FEATURED,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: "hey"
            })
        )

};

// Get Fresh Updates

export const getFreshUpdate = () => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/newComics`)
        .then(res => {
            dispatch({
                type: GET_NEW_UPLOADS,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                /*type: GET_ERRORS,
                payload: err.response.data*/
                type: GET_NEW_UPLOADS,
                payload: []
            })
        )
};



// Get Popular Comics

export const getPopularComics = () => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/popularComics`)
        .then(res => {
            dispatch({
                type: GET_POPULAR,
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


// Get Popular Comics

export const getLastestChapterComics = () => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/latestChapterComics`)
        .then(res => {
            dispatch({
                type: GET_FRESH_UPDATE,
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


//  Get all comics

/*export const getAllComics = () => dispatch => {
    dispatch(setLoading());
    axios.get('/api/comicRoutes/comic/latestChapterComics')
        .then(res => {
            dispatch({
                type: GET_ALL_COMICS,
                payload: res.data
            })
        })
}*/


//  Get searched comic

export const getSearchedComic = (comicTitle, history) => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getSearchedComic/${comicTitle}`)
        .then(res => {
            dispatch({
                type: GET_SEARCHED_COMICS,
                payload: res.data
            })
        })
        .then(res => history.push(`/search/${comicTitle}`))
};


//  Get a comic with sub chapter

export const getChapterOneAndSubChapters = (id) => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getChapterOneAndSub/${id}`)
        .then(res => {
            dispatch({
                type: GET_COMIC_WITH_SUB_COMIC,
                payload: res.data
            })
        })

};

//  Get  chapters for comic

export const getComicChapters = (id) => dispatch => {

    dispatch(setLoading());
    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getChapters/${id}`)
    // axios.get(`http://localhost:8080/api/comicRoutes/comic/getChapters/${id}`)
        .then(res => {
            dispatch({
                type: GET_COMIC_WITH_SUB_COMIC_CHAPTERS,
                payload: res.data
            })
        })

};


//  Get a single comic

export const getASingleComic = (id) => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getSingleComic/${id}`)
        .then(res => {
            dispatch({
                type: GET_A_COMIC_CHAPTER,
                payload: res.data
            })
        })

};


//  Add Views To Comic

export const addView = (id, username, fakeBodyHere) => (dispatch, getState) => {

    // dispatch(setLoading());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addViews/${id}/${username}`, fakeBodyHere, tokenConfig(getState))
        .then(res => {
            /*dispatch({
                type: GET_A_COMIC,
                payload: res.data
            })*/
            console.log('done')
        })
        /*.catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )*/

};


//  Add to reader's favorite

export const getFavorites = () => (dispatch, getState) => {

    // dispatch(setLoading());

    const token = getState().auth.token;

    const decoded = jwt_decode(token);

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/getFavorites`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: SET_CURRENT,
                payload: decoded

            })

            // console.log(res.data)
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

};



//  Add to reader's favorite

export const addToFavorite = (comicTitle, comicID, fakeBodyHere) => (dispatch, getState) => {

    // dispatch(setLoading());
    dispatch(clearErrors());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addToFav/${comicTitle}`,fakeBodyHere ,tokenConfig(getState))
        .then(res =>
            dispatch(window.location.reload())
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

};

// SET LOGGED IN ADMIN
//     export const setCurrentUser = (decoded) => {
//         return {
//             type: SET_CURRENT_USER,
//             payload: decoded
//         }
//     };


//  Remove reader's favorite

export const removeFavorite = (comicTitle, id) => dispatch => {

    dispatch(setLoading());

    axios.get(`http://206.189.94.96/api/comicRoutes/comic/removeFav/${comicTitle}/${id}`)
        .then(res => {
            dispatch({
                type: SET_CURRENT_USER,
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


//  Add Comment Under Comic

export const addCommentUnderComic = (commentData, id) => (dispatch, getState) => {

    // dispatch(setLoading());
    dispatch(clearErrors());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addCommentUnderComic/${id}`, commentData, tokenConfig(getState))
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


//  Add Comment Under Comic And Chapter

export const addCommentUnderComicAndChapter = (commentData, id) => (dispatch, getState) => {

    // dispatch(setLoading());

    dispatch(clearErrors());

    axios.post(`http://206.189.94.96/api/comicRoutes/comic/addCommentUnderComicAndChapter/${id}`, commentData, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_A_COMIC_CHAPTER,
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

// Set loading state
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};
