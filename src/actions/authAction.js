import axios from 'axios';

// import setAuthToken from '../utils/setAuthToken';

import jwt_decode from 'jwt-decode';

import {GET_ERRORS, READER_LOADED, SET_CURRENT_USER} from "./types";


// Register User
export const registerReader = (readerData, history) => dispatch => {
    axios.post(`http://206.189.94.96/api/readersRoutes/readerAuth/register`, readerData)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};


// Edit Profile Of User
export const editReaderProfile = (readerData, history, getState) => dispatch => {
    axios.post(`http://localhost:8080/api/readersRoutes/readerAuth/editProfile`, readerData, tokenConfig(getState))
        .then(res => history.push('/dashboard'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};


// LOAD - GET Reader Token
export const loadUser = () => (dispatch, getState) => {

    // Get token from localStorage

    const token = getState().auth.token;

    //Headers
    const config = {
      headers: {
          "Content-type": "application/json"
      }
    };

    //If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    axios.get(`http://206.189.94.96/api/readersRoutes/readerAuth/getReader`, config)
        .then(res => dispatch({
            type: READER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};


// LOGIN - GET Reader Token

export const loginReader = (readerData, history) => dispatch => {
  axios.post(`http://206.189.94.96/api/readersRoutes/readerAuth/login`, readerData)
      .then(res => {

      //    Save to localStorage
          const { token } = res.data;

      //    Set token to LS
          localStorage.setItem('token', token);

          //Headers
          const config = {
              headers: {
                  "Content-type": "application/json"
              }
          };

          //If token, add to headers
          if (token) {
              config.headers['x-auth-token'] = token
          }

      //    Decode token to get admin data
          const decoded = jwt_decode(token);

      //    Set current reader

          dispatch(setCurrentUser(decoded));

          dispatch(loadUser());

          history.push('/')
      })
      .catch(err => {
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
          // console.log(err)
      })
};


// SET LOGGED IN ADMIN
export const setCurrentUser = (decoded) => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
    // dispatch(loadUser())
};


export const logoutReader = () => dispatch => {
//    Remove token from localStorage
    localStorage.removeItem('token');
//    Remove auth header for future requests
//     setAuthToken(false);
//    Set Current User to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};



export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
