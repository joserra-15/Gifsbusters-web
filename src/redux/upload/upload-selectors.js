import { createSelector } from 'reselect';

export const selectUploadState = state => state.ui.upload;

export const uploadSelector = createSelector(
  [selectUploadState],
  upload => upload,
);
