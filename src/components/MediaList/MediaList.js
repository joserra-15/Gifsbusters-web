import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from '../MediaCard';
import Spinner from '../Spinner';

import './MediaList.scss';

export const MediaList = ({ loading, media }) => {
  return (
    <section className='media-list'>
      {loading ? (
        <Spinner />
      ) : (
        media.map(mediaId => <MediaCard key={mediaId} mediaId={mediaId} />)
      )}
    </section>
  );
};

MediaList.propTypes = {
  loading: PropTypes.bool.isRequired,
  media: PropTypes.array.isRequired,
};
