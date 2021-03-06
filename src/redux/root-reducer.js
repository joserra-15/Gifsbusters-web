import { combineReducers } from 'redux';
import { AuthReducer } from './auth/auth-reducer';
import { GifReducer } from './gif/gif-reducer';
import { HomeReducer } from './home/home-reducer';
import { MediaReducer } from './media/media-reducer';
import { MediaViewReducer } from './mediaView/mediaView-reducer';
import { MemeReducer } from './meme/meme-reducer';
import { SearchReducer } from './search/search-reducer';
import { UploadReducer } from './upload/upload-reducer';
import { UserReducer } from './user/user-reducer';
import { UserViewReducer } from './userView/userView-reducer';

const entitiesReducer = combineReducers({
  userStore: UserReducer,
  mediaStore: MediaReducer,
});

const uiReducer = combineReducers({
  upload: UploadReducer,
  home: HomeReducer,
  meme: MemeReducer,
  gif: GifReducer,
  userView: UserViewReducer,
  mediaView: MediaViewReducer,
  search: SearchReducer,
});

export const rootReducer = combineReducers({
  auth: AuthReducer,
  entities: entitiesReducer,
  ui: uiReducer,
});
