import { createSelector } from 'reselect';

export const selectMemeState = state => state.ui.meme;

export const memeSelector = createSelector([selectMemeState], meme => meme);
