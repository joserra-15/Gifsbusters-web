import { GifTypes } from './gif-types';

const gifInitialState = {
  isGettingGifs: false,
  getGifsError: null,
  getGifsSuccess: false,
  gifs: [],
};

export const GifReducer = (state = gifInitialState, action) => {
  switch (action.type) {
    case GifTypes.GET_GIF_REQUEST: {
      return {
        ...state,
        isGettingGifs: true,
        getGifsError: null,
        getGifsSuccess: false,
      };
    }
    case GifTypes.GET_GIF_ERROR: {
      return {
        ...state,
        isGettingGifs: false,
        getGifsError: action.payload,
        getGifsSuccess: false,
      };
    }
    case GifTypes.GET_GIF_SUCCESS: {
      return {
        ...state,
        isGettingGifs: false,
        getGifsError: null,
        getGifsSuccess: true,
        gifs: [...action.payload],
      };
    }

    default:
      return state;
  }
};
