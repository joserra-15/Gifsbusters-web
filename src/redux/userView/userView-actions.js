import { toast } from 'react-toastify';
import { UserViewTypes } from './userView-types';
import * as auth from '../../services/auth';
import api from '../../api';
import { normalizeUsers } from '../../utils/normlizr';
import { loadUsers } from '../user/user-actions';
import { signOutSuccess } from '../auth/auth-actions';

export const getUserByIdRequest = () => ({
  type: UserViewTypes.GET_USER_VIEW_REQUEST,
});
export const getUserByIdSuccess = () => ({
  type: UserViewTypes.GET_USER_VIEW_SUCCESS,
});
export const getUserByIdError = message => ({
  type: UserViewTypes.GET_USER_VIEW_ERROR,
  payload: message,
});

export const getUserById = userId => {
  return async function getUserByIdThunk(dispatch) {
    dispatch(getUserByIdRequest());
    try {
      const { data: response } = await api.getUserById(userId);
      if (response.error) {
        return dispatch(getUserByIdError(response.error));
      }

      const { entities } = normalizeUsers([response.data]);
      dispatch(loadUsers(entities.users));

      return dispatch(getUserByIdSuccess());
    } catch (error) {
      return dispatch(getUserByIdError(error.message));
    }
  };
};

export const editUserRequest = () => ({
  type: UserViewTypes.EDIT_USER_VIEW_REQUEST,
});
export const editUserSuccess = () => ({
  type: UserViewTypes.EDIT_USER_VIEW_SUCCESS,
});
export const editUserError = message => ({
  type: UserViewTypes.EDIT_USER_VIEW_ERROR,
  payload: message,
});

export const editUser = (userName, image) => {
  return async function editUserThunk(dispatch) {
    const token = await auth.getCurrentUserToken();

    if (!token) {
      return dispatch(signOutSuccess());
    }
    dispatch(editUserRequest());
    try {
      const { data: response } = await api.editUser(
        {
          Authorization: `Bearer ${token}`,
        },
        { userName, image },
      );
      if (response.error) {
        return dispatch(editUserError(response.error));
      }

      const { entities } = normalizeUsers([response.data]);
      dispatch(loadUsers(entities.users));
      toast.success('👌 Updated corretcly!');
      return dispatch(editUserSuccess());
    } catch (error) {
      return dispatch(editUserError(error.message));
    }
  };
};
