import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { getToken } from '../utils/AuthService';

export const COMPANY_REQUEST = 'COMPANY_REQUEST';
export const COMPANY_SUCCESS = 'COMPANY_SUCCESS';
export const COMPANY_FAILURE = 'COMPANY_FAILURE';

function requestCompanies() {
  return {
    type: COMPANY_REQUEST,
    isFetching: true,
    companies: []
  };
}

function receiveCompanies(companies) {
  return {
    type: COMPANY_SUCCESS,
    isFetching: false,
    companies: companies
  };
}

function fetchCompaniesError(message) {
  return {
    type: COMPANY_FAILURE,
    isFetching: false,
    message
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function getCompanies() {
  let domain = 'http://localhost:9000/companies?access_token=' + getToken();
  let config = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  };

  return dispatch => {
    // We dispatch Request Companies to kickoff the call to the API
    dispatch(requestCompanies());

    return fetch(domain, config)
      .then(response => response.json().then(companies => ({ companies, response })))
      .then(({ companies, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(fetchCompaniesError(companies.message));
          return Promise.reject(companies);
        } else {
          dispatch(receiveCompanies(companies));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}
