import { SearchTypes } from './search-types';

const searchInitialState = {
  isGettingMemes: false,
  getMemesError: null,
  getMemesSuccess: false,
  memes: [],

  filterMeme: false,
  filterGif: false,
  filterUser: false,
};

export const SearchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case SearchTypes.GET_SEARCH_MEME_REQUEST: {
      return {
        ...state,
        isGettingMemes: true,
        getMemesError: null,
        getMemesSuccess: false,
      };
    }
    case SearchTypes.GET_SEARCH_MEME_ERROR: {
      return {
        ...state,
        isGettingMemes: false,
        getMemesError: action.payload,
        getMemesSuccess: false,
      };
    }
    case SearchTypes.GET_SEARCH_MEME_SUCCESS: {
      return {
        ...state,
        isGettingMemes: false,
        getMemesError: null,
        getMemesSuccess: true,
        memes: [...action.payload],
      };
    }
    case SearchTypes.SEARCH_FILTER_MEME_CHANGE: {
      return {
        ...state,
        filterMeme: action.payload,
      };
    }
    case SearchTypes.SEARCH_FILTER_GIF_CHANGE: {
      return {
        ...state,
        filterGif: action.payload,
      };
    }
    case SearchTypes.SEARCH_FILTER_USER_CHANGE: {
      return {
        ...state,
        filterUser: action.payload,
      };
    }

    default:
      return state;
  }
};
