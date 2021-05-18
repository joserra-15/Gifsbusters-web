import { HomeTypes } from './home-types';
import api from '../../api';
import { normalizeMedia } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';

export const getMediaRequest = () => ({
  type: HomeTypes.GET_MEDIA_REQUEST,
});
export const getMediaSuccess = media => ({
  type: HomeTypes.GET_MEDIA_SUCCESS,
  payload: media,
});
export const getMediaError = message => ({
  type: HomeTypes.GET_MEDIA_ERROR,
  payload: message,
});

export const getMedia = () => {
  return async function getMediaThunk(dispatch) {
    dispatch(getMediaRequest());
    try {
      const { data: response } = await api.getMedia();
      if (response.error) {
        return dispatch(getMediaError(response.error));
      }

      const { result, entities } = normalizeMedia(response.data);
      dispatch(loadMedia(entities.media));

      return dispatch(getMediaSuccess(result));
    } catch (error) {
      return dispatch(getMediaError(error.message));
    }
  };
};
