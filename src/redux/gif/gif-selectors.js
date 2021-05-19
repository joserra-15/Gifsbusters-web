import { createSelector } from 'reselect';

export const selectGifState = state => state.ui.gif;

export const gifSelector = createSelector([selectGifState], gif => gif);
