import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { getToken } from '../utils/AuthService';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

function requestUsers() {
  return {
    type: USERS_REQUEST,
    isFetching: true,
    users: []
  };
}

function receiveUsers(users) {
  return {
    type: USERS_SUCCESS,
    isFetching: false,
    users: users
  };
}

function fetchUsersError(message) {
  return {
    type: USERS_FAILURE,
    isFetching: false,
    message
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function getUsers(stoken) {
  let token = stoken ? stoken : getToken();
  let domain = 'http://localhost:9000/users?access_token=' + token;
  let config = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  };

  return dispatch => {
    // We dispatch Request Users to kickoff the call to the API
    dispatch(requestUsers());

    return fetch(domain, config)
      .then(response => response.json().then(users => ({ users, response })))
      .then(({ users, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(fetchUsersError(users.message));
          return Promise.reject(users);
        } else {
          dispatch(receiveUsers(users));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}

export function registerUser() {
  let domain = 'http://localhost:9000/users?access_token=' + getToken();
  let config = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };

  return dispatch => {
    // We dispatch Request Users to kickoff the call to the API
    dispatch(requestUsers());

    return fetch(domain, config)
      .then(response => response.json().then(users => ({ users, response })))
      .then(({ users, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(fetchUsersError(users.message));
          return Promise.reject(users);
        } else {
          dispatch(receiveUsers(users));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}
