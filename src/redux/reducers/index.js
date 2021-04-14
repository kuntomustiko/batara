import { combineReducers } from 'redux';

import datadetailReducer from './datadetailReducer';
import datasukaReducer from './datasukaReducer';

export default combineReducers({
  datadetailReducer,
  datasukaReducer,
});
