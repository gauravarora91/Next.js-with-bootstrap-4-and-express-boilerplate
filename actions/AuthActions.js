import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { setCookie } from '../utils/Cookie';
import { getToken } from '../utils/AuthService';

export const INITALISE_APP = 'INITALISE_APP';
export const FETCH_COMPANY_DATA = 'FETCH_COMPANY_DATA';
export const RECEIVE_COMPANY_DATA_SUCCESS = 'RECEIVE_COMPANY_DATA_SUCCESS';
export const FETCH_COMPANY_DATA_FAILED = 'FETCH_COMPANY_DATA_FAILED';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function initApp(token, slug) {
  return {
    type: INITALISE_APP,
    token: token,
    slug: slug
  };
}

function fetchCompanyData(slug) {
  return {
    type: FETCH_COMPANY_DATA,
    slug: slug
  };
}

function fetchCompanyDataFailed(message) {
  return {
    type: FETCH_COMPANY_DATA_FAILED,
    message
  };
}

function receiveCompanyData(company) {
  return {
    type: RECEIVE_COMPANY_DATA_SUCCESS,
    company: company
  };
}

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

export function initAppCompany(slug) {
  let config = {
    method: 'GET',
    credentials: 'include'
  };
  return dispatch => {
    return fetch(process.env.BASE_URL + '/companies/slug/' + slug, config)
      .then(response => response.json().then(company => ({ company, response })))
      .then(({ company, response }) => {
        if (!response.ok) {
          var error = new Error(response.statusText);
          error.response = response;
          return Promise.reject(error);
        } else {
          dispatch(receiveCompanyData(company));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}

export function initAppSession(stoken, slug) {
  let token = stoken ? stoken : getToken();
  let domain = process.env.BASE_URL + '/users/me?access_token=' + token;
  let config = {
    method: 'GET',
    credentials: 'include'
  };
  return dispatch => {
    return fetch(domain, config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          Router.push('/login');
          dispatch(loginError(user.message));
          return Promise.reject(user);
        } else {
          dispatch(receiveLogin({ user: user }));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(email, password) {
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

    return fetch(process.env.BASE_URL + '/auth', config)
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
