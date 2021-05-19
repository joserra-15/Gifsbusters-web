import { MemeTypes } from './meme-types';

const memeInitialState = {
  isGettingMemes: false,
  getMemesError: null,
  getMemesSuccess: false,
  memes: [],
};

export const MemeReducer = (state = memeInitialState, action) => {
  switch (action.type) {
    case MemeTypes.GET_MEME_REQUEST: {
      return {
        ...state,
        isGettingMemes: true,
        getMemesError: null,
        getMemesSuccess: false,
      };
    }
    case MemeTypes.GET_MEME_ERROR: {
      return {
        ...state,
        isGettingMemes: false,
        getMemesError: action.payload,
        getMemesSuccess: false,
      };
    }
    case MemeTypes.GET_MEME_SUCCESS: {
      return {
        ...state,
        isGettingMemes: false,
        getMemesError: null,
        getMemesSuccess: true,
        memes: [...action.payload],
      };
    }

    default:
      return state;
  }
};
