import { normalize, schema } from 'normalizr';

const user = new schema.Entity(
  'users',
  {},
  {
    idAttribute: '_id',
  },
);

export function normalizeUsers(users) {
  return normalize(users, [user]);
}

const media = new schema.Entity(
  'media',
  {},
  {
    idAttribute: '_id',
  },
);

export function normalizeMedia(medias) {
  return normalize(medias, [media]);
}
