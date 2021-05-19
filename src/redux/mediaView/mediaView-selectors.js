import { createSelector } from 'reselect';

export const selectMediaViewState = (state) => state.ui.mediaView;

export const mediaViewSelector = createSelector([selectMediaViewState], (mediaView) => mediaView);
