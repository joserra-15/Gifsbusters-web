import { GifTypes } from './gif-types';
import api from '../../api';
import { normalizeMedia } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';

export const getGifsRequest = () => ({
  type: GifTypes.GET_GIF_REQUEST,
});
export const getGifsSuccess = media => ({
  type: GifTypes.GET_GIF_SUCCESS,
  payload: media,
});
export const getGifsError = message => ({
  type: GifTypes.GET_GIF_ERROR,
  payload: message,
});

export const getGifs = () => {
  return async function getGifsThunk(dispatch) {
    dispatch(getGifsRequest());
    try {
      const { data: response } = await api.getGifs();
      if (response.error) {
        return dispatch(getGifsError(response.error));
      }
      const { result, entities } = normalizeMedia(response.data);
      dispatch(loadMedia(entities.media));

      return dispatch(getGifsSuccess(result));
    } catch (error) {
      return dispatch(getGifsError(error.message));
    }
  };
};
