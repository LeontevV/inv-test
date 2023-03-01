import { combineReducers } from 'redux';
import { AuthApi } from '../api/authApi';

import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
});

export default rootReducer;
