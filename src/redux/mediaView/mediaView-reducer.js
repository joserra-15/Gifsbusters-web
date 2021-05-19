import { MediaViewTypes } from './mediaView-types';

const mediaViewInitialState = {
  isGettingMediaView: false,
  getMediaViewError: null,
  getMediaViewSuccess: false,
};

export const MediaViewReducer = (state = mediaViewInitialState, action) => {
  switch (action.type) {
    case MediaViewTypes.GET_MEDIA_VIEW_REQUEST: {
      return {
        ...state,
        isGettingMediaView: true,
        getMediaViewError: null,
        getMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.GET_MEDIA_VIEW_ERROR: {
      return {
        ...state,
        isGettingMediaView: false,
        getMediaViewError: action.payload,
        getMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.GET_MEDIA_VIEW_SUCCESS: {
      return {
        ...state,
        isGettingMediaView: false,
        getMediaViewError: null,
        getMediaViewSuccess: true,
      };
    }

    default:
      return state;
  }
};
