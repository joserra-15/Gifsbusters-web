import { MediaTypes } from './media-types';

export const MediaInitialState = {
  media: {},
};

export const MediaReducer = (state = MediaInitialState, action) => {
  switch (action.type) {
    case MediaTypes.LOAD_MEDIA: {
      return {
        ...state,
        media: { ...state.media, ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
