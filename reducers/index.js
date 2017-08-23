import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import CompanyReducer from './CompanyReducer';

export default combineReducers({
  AuthReducer,
  UserReducer,
  CompanyReducer
});
