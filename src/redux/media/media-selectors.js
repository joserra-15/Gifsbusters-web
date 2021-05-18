import { createSelector } from 'reselect';

export const selectMediaState = state => state.entities.mediaStore;

export const mediaSelector = createSelector([selectMediaState], media => media);

export const selectMediaByIdState = id =>
  createSelector(
    state => state.entities.mediaStore.media[id],
    mediaIds => mediaIds,
  );
