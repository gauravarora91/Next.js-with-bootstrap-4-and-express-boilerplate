import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { setCookie } from '../utils/Cookie';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(email, password) {
  let domain = 'http://localhost:9000';
  let config = {
    method: 'POST',
    body: JSON.stringify({
      access_token: 'oiiwpAECXMhyeWSMvDdg144HWnFf48UU'
    }),
    headers: {
      'content-type': 'application/json',
      authorization: 'Basic ' + btoa(email + ':' + password)
    }
  };

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin({ email: email, password: password }));

    return fetch(domain + '/auth', config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message));
          return Promise.reject(user);
        } else {
          Router.push('/admin');
          // If login was successful, set the token in local storage
          localStorage.setItem('token', user.token);
          localStorage.setItem('profile', JSON.stringify(user.user));
          setCookie('x-access-token', user.token);
          // Dispatch the success action
          dispatch(receiveLogin(user));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    dispatch(receiveLogout());
  };
}
