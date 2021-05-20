import { UserViewTypes } from './userView-types';

const userViewInitialState = {
  isGettingUserView: false,
  getUserViewError: null,
  getUserViewSuccess: false,

  isEditingUserView: false,
  ediUserViewError: null,
  ediUserViewSuccess: false,

  isGettingUserMediaView: false,
  getUserMediaViewError: null,
  getUserMediaViewSuccess: false,
  media: [],
};

export const UserViewReducer = (state = userViewInitialState, action) => {
  switch (action.type) {
    case UserViewTypes.GET_USER_VIEW_REQUEST: {
      return {
        ...state,
        isGettingUserView: true,
        getUserViewError: null,
        getUserViewSuccess: false,
      };
    }
    case UserViewTypes.GET_USER_VIEW_ERROR: {
      return {
        ...state,
        isGettingUserView: false,
        getUserViewError: action.payload,
        getUserViewSuccess: false,
      };
    }
    case UserViewTypes.GET_USER_VIEW_SUCCESS: {
      return {
        ...state,
        isGettingUserView: false,
        getUserViewError: null,
        getUserViewSuccess: true,
      };
    }
    case UserViewTypes.EDIT_USER_VIEW_REQUEST: {
      return {
        ...state,
        isEditingUserView: true,
        ediUserViewError: null,
        ediUserViewSuccess: false,
      };
    }
    case UserViewTypes.EDIT_USER_VIEW_ERROR: {
      return {
        ...state,
        isEditingUserView: false,
        ediUserViewError: action.payload,
        ediUserViewSuccess: false,
      };
    }
    case UserViewTypes.EDIT_USER_VIEW_SUCCESS: {
      return {
        ...state,
        isEditingUserView: false,
        ediUserViewError: null,
        ediUserViewSuccess: true,
      };
    }
    case UserViewTypes.GET_USER_MEDIA_VIEW_REQUEST: {
      return {
        ...state,
        isGettingUserMediaView: true,
        getUserMediaViewError: null,
        getUserMediaViewSuccess: false,
      };
    }
    case UserViewTypes.GET_USER_MEDIA_VIEW_ERROR: {
      return {
        ...state,
        isGettingUserMediaView: false,
        getUserMediaViewError: action.payload,
        getUserMediaViewSuccess: false,
      };
    }
    case UserViewTypes.GET_USER_MEDIA_VIEW_SUCCESS: {
      return {
        ...state,
        isGettingUserMediaView: false,
        getUserMediaViewError: null,
        getUserMediaViewSuccess: true,
        media: [...action.payload],
      };
    }

    default:
      return state;
  }
};
