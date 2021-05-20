import { MediaViewTypes } from './mediaView-types';

const mediaViewInitialState = {
  isGettingMediaView: false,
  getMediaViewError: null,
  getMediaViewSuccess: false,

  isEditingMediaView: false,
  editMediaViewError: null,
  editMediaViewSuccess: false,

  isDeletingMediaView: false,
  deleteMediaViewError: null,
  deleteMediaViewSuccess: false,
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

    case MediaViewTypes.EDIT_MEDIA_VIEW_REQUEST: {
      return {
        ...state,
        isEditingMediaView: true,
        editMediaViewError: null,
        editMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.EDIT_MEDIA_VIEW_ERROR: {
      return {
        ...state,
        isEditingMediaView: false,
        editMediaViewError: action.payload,
        editMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.EDIT_MEDIA_VIEW_SUCCESS: {
      return {
        ...state,
        isEditingMediaView: false,
        editMediaViewError: null,
        editMediaViewSuccess: true,
      };
    }
    case MediaViewTypes.EDIT_MEDIA_VIEW_RESET: {
      return {
        ...state,
        isEditingMediaView: false,
        editMediaViewError: null,
        editMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.DELETE_MEDIA_VIEW_REQUEST: {
      return {
        ...state,
        isDeletingMediaView: true,
        deleteMediaViewError: null,
        deleteMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.DELETE_MEDIA_VIEW_ERROR: {
      return {
        ...state,
        isDeletingMediaView: false,
        deleteMediaViewError: action.payload,
        deleteMediaViewSuccess: false,
      };
    }
    case MediaViewTypes.DELETE_MEDIA_VIEW_SUCCESS: {
      return {
        ...state,
        isDeletingMediaView: false,
        deleteMediaViewError: null,
        deleteMediaViewSuccess: true,
      };
    }

    default:
      return state;
  }
};
