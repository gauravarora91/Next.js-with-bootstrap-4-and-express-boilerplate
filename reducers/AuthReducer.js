import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_COMPANY_DATA,
  RECEIVE_COMPANY_DATA_SUCCESS,
  INITALISE_APP
} from '../actions/AuthActions';

export default (
  state = {
    isFetching: false,
    isAuthenticated: false,
    isUserDataFetched: false,
    user: {},
    isCompanyDataFetched: false,
    company: {}
  },
  action
) => {
  switch (action.type) {
    case INITALISE_APP:
      return Object.assign({}, state, {
        token: action.token,
        slug: action.slug
      });
    case RECEIVE_COMPANY_DATA_SUCCESS:
      return Object.assign({}, state, {
        company: action.company,
        isCompanyDataFetched: true
      });
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        isUserDataFetched: true,
        ...action.token,
        ...action.user
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
};
