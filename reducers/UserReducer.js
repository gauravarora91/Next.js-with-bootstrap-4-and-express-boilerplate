import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../actions/UserActions';

export default (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
        users: action.users
      });
    case USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};
