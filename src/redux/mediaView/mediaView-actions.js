import { toast } from 'react-toastify';
import { MediaViewTypes } from './mediaView-types';
import api from '../../api';
import * as auth from '../../services/auth';
import { normalizeMedia, normalizeUsers } from '../../utils/normlizr';
import { loadMedia, removeMedia } from '../media/media-actions';
import { loadUsers } from '../user/user-actions';
import { signOutSuccess } from '../auth/auth-actions';

export const getMediaByIdRequest = () => ({
  type: MediaViewTypes.GET_MEDIA_VIEW_REQUEST,
});
export const getMediaByIdSuccess = () => ({
  type: MediaViewTypes.GET_MEDIA_VIEW_SUCCESS,
});
export const getMediaByIdError = message => ({
  type: MediaViewTypes.GET_MEDIA_VIEW_ERROR,
  payload: message,
});

export const getMediaById = mediaId => {
  return async function getMediaByIdThunk(dispatch) {
    dispatch(getMediaByIdRequest());
    try {
      const { data: response } = await api.getMediaById(mediaId);
      if (response.error) {
        return dispatch(getMediaByIdError(response.error));
      }
      const { result, entities } = normalizeUsers([response.data.owner]);

      dispatch(loadUsers(entities.users));
      dispatch(
        loadMedia({
          [response.data._id]: { ...response.data, owner: result[0] },
        }),
      );

      return dispatch(getMediaByIdSuccess());
    } catch (error) {
      return dispatch(getMediaByIdError(error.message));
    }
  };
};

export const editMediaRequest = () => ({
  type: MediaViewTypes.EDIT_MEDIA_VIEW_REQUEST,
});
export const editMediaSuccess = () => ({
  type: MediaViewTypes.EDIT_MEDIA_VIEW_SUCCESS,
});
export const editMediaError = message => ({
  type: MediaViewTypes.EDIT_MEDIA_VIEW_ERROR,
  payload: message,
});
export const editMediaReset = () => ({
  type: MediaViewTypes.EDIT_MEDIA_VIEW_RESET,
});

export const editMedia = ({ title, type, mediaId }) => {
  return async function editMediaThunk(dispatch) {
    const token = await auth.getCurrentUserToken();

    if (!token) {
      return dispatch(signOutSuccess());
    }

    dispatch(editMediaRequest());
    try {
      const { data: response } = await api.editMedia(
        {
          Authorization: `Bearer ${token}`,
        },
        { title, type, mediaId },
      );
      if (response.error) {
        return dispatch(editMediaError(response.error));
      }
      const { entities } = normalizeMedia([response.data]);

      dispatch(loadMedia(entities.media));
      toast.success('update correctly!');
      return dispatch(editMediaSuccess());
    } catch (error) {
      return dispatch(editMediaError(error.message));
    }
  };
};

export const deleteMediaRequest = () => ({
  type: MediaViewTypes.DELETE_MEDIA_VIEW_REQUEST,
});
export const deleteMediaSuccess = () => ({
  type: MediaViewTypes.DELETE_MEDIA_VIEW_SUCCESS,
});
export const deleteMediaError = message => ({
  type: MediaViewTypes.DELETE_MEDIA_VIEW_ERROR,
  payload: message,
});

export const deleteMedia = mediaId => {
  return async function deleteMediaThunk(dispatch) {
    const token = await auth.getCurrentUserToken();

    if (!token) {
      return dispatch(signOutSuccess());
    }

    dispatch(deleteMediaRequest());
    try {
      const { data: response } = await api.deleteMedia(
        {
          Authorization: `Bearer ${token}`,
        },
        { mediaId },
      );
      if (response.error) {
        return dispatch(deleteMediaError(response.error));
      }
      dispatch(removeMedia(mediaId));
      toast.success('delete correctly!');
      return dispatch(deleteMediaSuccess());
    } catch (error) {
      return dispatch(deleteMediaError(error.message));
    }
  };
};
