import { SearchTypes } from './search-types';
import api from '../../api';
import { normalizeMedia } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';

export const getSearchMemeRequest = () => ({
  type: SearchTypes.GET_SEARCH_MEME_REQUEST,
});
export const getSearchMemeSuccess = media => ({
  type: SearchTypes.GET_SEARCH_MEME_SUCCESS,
  payload: media,
});
export const getSearchMemeError = message => ({
  type: SearchTypes.GET_SEARCH_MEME_ERROR,
  payload: message,
});

export const getSearchMeme = searchValues => {
  return async function getSearchMemeThunk(dispatch) {
    dispatch(getSearchMemeRequest());
    try {
      const { data: response } = await api.getSearchMeme(searchValues);
      if (response.error) {
        return dispatch(getSearchMemeError(response.error));
      }
      const { result, entities } = normalizeMedia(response.data);
      dispatch(loadMedia(entities.media));

      return dispatch(getSearchMemeSuccess(result));
    } catch (error) {
      return dispatch(getSearchMemeError(error.message));
    }
  };
};

export const filterChangeMeme = filterMeme => ({
  type: SearchTypes.SEARCH_FILTER_MEME_CHANGE,
  payload: filterMeme,
});
export const filterChangeGif = filterGif => ({
  type: SearchTypes.SEARCH_FILTER_GIF_CHANGE,
  payload: filterGif,
});
export const filterChangeUser = filterUser => ({
  type: SearchTypes.SEARCH_FILTER_USER_CHANGE,
  payload: filterUser,
});
