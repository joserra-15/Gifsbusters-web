import { UserViewTypes } from './userView-types';

const userViewInitialState = {
  isGettingUserView: false,
  getUserViewError: null,
  getUserViewSuccess: false,

  isEditingUserView: false,
  ediUserViewError: null,
  ediUserViewSuccess: false,

  user: '',
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
        user: action.payload,
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

    default:
      return state;
  }
};
