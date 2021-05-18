import { combineReducers } from 'redux';
import { AuthReducer } from './auth/auth-reducer';
import { HomeReducer } from './Home/home-reducer';
import { MediaReducer } from './media/media-reducer';
import { UploadReducer } from './upload/upload-reducer';
import { UserReducer } from './user/user-reducer';

const entitiesReducer = combineReducers({
  userStore: UserReducer,
  mediaStore: MediaReducer,
});

const uiReducer = combineReducers({
  upload: UploadReducer,
  home: HomeReducer,
});

export const rootReducer = combineReducers({
  auth: AuthReducer,
  entities: entitiesReducer,
  ui: uiReducer,
});
