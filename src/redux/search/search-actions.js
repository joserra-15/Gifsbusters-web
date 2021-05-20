import { SearchTypes } from './search-types';
import api from '../../api';
import { normalizeMedia, normalizeUsers } from '../../utils/normlizr';
import { loadMedia } from '../media/media-actions';
import { loadUsers } from '../user/user-actions';

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

export const getSearchMeme = searchValue => {
  return async function getSearchMemeThunk(dispatch) {
    dispatch(getSearchMemeRequest());
    try {
      const { data: response } = await api.getSearchMeme(searchValue);
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

export const getSearchGifRequest = () => ({
  type: SearchTypes.GET_SEARCH_GIF_REQUEST,
});
export const getSearchGifSuccess = media => ({
  type: SearchTypes.GET_SEARCH_GIF_SUCCESS,
  payload: media,
});
export const getSearchGifError = message => ({
  type: SearchTypes.GET_SEARCH_GIF_ERROR,
  payload: message,
});

export const getSearchGif = searchValue => {
  return async function getSearchGifThunk(dispatch) {
    dispatch(getSearchGifRequest());
    try {
      const { data: response } = await api.getSearchGif(searchValue);
      if (response.error) {
        return dispatch(getSearchGifError(response.error));
      }
      const { result, entities } = normalizeMedia(response.data);
      dispatch(loadMedia(entities.media));

      return dispatch(getSearchGifSuccess(result));
    } catch (error) {
      return dispatch(getSearchGifError(error.message));
    }
  };
};

export const getSearchUserRequest = () => ({
  type: SearchTypes.GET_SEARCH_USER_REQUEST,
});
export const getSearchUserSuccess = media => ({
  type: SearchTypes.GET_SEARCH_USER_SUCCESS,
  payload: media,
});
export const getSearchUserError = message => ({
  type: SearchTypes.GET_SEARCH_USER_ERROR,
  payload: message,
});

export const getSearchUser = searchValue => {
  return async function getSearchUserThunk(dispatch) {
    dispatch(getSearchUserRequest());
    try {
      const { data: response } = await api.getSearchUser(searchValue);
      if (response.error) {
        return dispatch(getSearchUserError(response.error));
      }
      const { result, entities } = normalizeUsers(response.data);
      dispatch(loadUsers(entities.users));

      return dispatch(getSearchUserSuccess(result));
    } catch (error) {
      return dispatch(getSearchUserError(error.message));
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
