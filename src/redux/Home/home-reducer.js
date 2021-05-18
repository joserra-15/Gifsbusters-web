import { HomeTypes } from './home-types';

const homeInitialState = {
  isGettingMedia: false,
  getMediaError: null,
  getMediaSuccess: false,
  media: [],
};

export const HomeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case HomeTypes.GET_MEDIA_REQUEST: {
      return {
        ...state,
        isGettingMedia: true,
        getMediaError: null,
        getMediaSuccess: false,
      };
    }
    case HomeTypes.GET_MEDIA_ERROR: {
      return {
        ...state,
        isGettingMedia: false,
        getMediaError: action.payload,
        getMediaSuccess: false,
      };
    }
    case HomeTypes.GET_MEDIA_SUCCESS: {
      return {
        ...state,
        isGettingMedia: false,
        getMediaError: null,
        getMediaSuccess: true,
        media: [...action.payload],
      };
    }

    default:
      return state;
  }
};
