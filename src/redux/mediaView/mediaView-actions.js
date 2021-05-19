import { MediaViewTypes } from './mediaView-types';
import api from '../../api';
import { normalizeUsers } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';
import { loadUsers } from '../user/user-actions';

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
