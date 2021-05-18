import { MediaTypes } from './media-types';

export const loadMedia = media => ({
  type: MediaTypes.LOAD_MEDIA,
  payload: media,
});
