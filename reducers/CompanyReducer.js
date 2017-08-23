import { COMPANY_REQUEST, COMPANY_SUCCESS, COMPANY_FAILURE } from '../actions/CompanyActions';

export default (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case COMPANY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case COMPANY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
        companies: action.companies
      });
    case COMPANY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};
