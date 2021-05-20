import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from '../MediaCard';
import Spinner from '../Spinner';

import './MediaList.scss';

export const MediaList = ({ loading, media, mediaEmptyMessage }) => {
  return (
    <section className='media-list'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {media.length === 0 && <p>{mediaEmptyMessage}</p>}
          {media.map(mediaId => (
            <MediaCard key={mediaId} mediaId={mediaId} />
          ))}
        </>
      )}
    </section>
  );
};

MediaList.defaultProps = {
  mediaEmptyMessage: 'There is no media',
};

MediaList.propTypes = {
  loading: PropTypes.bool.isRequired,
  media: PropTypes.array.isRequired,
  mediaEmptyMessage: PropTypes.string,
};
