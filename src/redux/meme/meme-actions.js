import { MemeTypes } from './meme-types';
import api from '../../api';
import { normalizeMedia } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';

export const getMemesRequest = () => ({
  type: MemeTypes.GET_MEME_REQUEST,
});
export const getMemesSuccess = media => ({
  type: MemeTypes.GET_MEME_SUCCESS,
  payload: media,
});
export const getMemesError = message => ({
  type: MemeTypes.GET_MEME_ERROR,
  payload: message,
});

export const getMemes = () => {
  return async function getMemesThunk(dispatch) {
    dispatch(getMemesRequest());
    try {
      const { data: response } = await api.getMemes();
      if (response.error) {
        return dispatch(getMemesError(response.error));
      }
      const { result, entities } = normalizeMedia(response.data);
      dispatch(loadMedia(entities.media));

      return dispatch(getMemesSuccess(result));
    } catch (error) {
      return dispatch(getMemesError(error.message));
    }
  };
};
