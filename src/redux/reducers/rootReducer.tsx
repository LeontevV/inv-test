import { combineReducers } from 'redux';
import { AuthApi } from '../api/authApi';
import { userApi } from '../api/userApi';

import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
