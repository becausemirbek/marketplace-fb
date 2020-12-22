// @flow

import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Category from './category/reducers';

export default combineReducers({
  Auth,
  Category,
});
