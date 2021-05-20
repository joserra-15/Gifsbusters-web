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
    case MediaTypes.REMOVE_MEDIA: {
      const newState = { ...state.media };
      delete newState[action.payload];
      return {
        ...state,
        media: { ...newState },
      };
    }
    default: {
      return state;
    }
  }
};
