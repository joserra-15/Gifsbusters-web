import { combineReducers } from 'redux';
import { AuthReducer } from './auth/auth-reducer';
import { UserReducer } from './user/user-reducer';

const entitiesReducer = combineReducers({
  userStore: UserReducer,
});

export const rootReducer = combineReducers({
  auth: AuthReducer,
  entities: entitiesReducer,
});
