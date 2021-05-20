import React from 'react';
import PropTypes from 'prop-types';
import { selectMediaByIdState } from '../../redux/media/media-selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

export const MediaCard = ({ mediaId }) => {
  const { title, media } = useSelector(selectMediaByIdState(mediaId)) || {};
  return (
    <div>
      <Link to={`${ROUTES.MEDIA_WHITHOUT_PARAM}${mediaId}`}>
        <img src={media} alt={title} className='img' />
      </Link>
    </div>
  );
};

MediaCard.propType = {
  mediaId: PropTypes.string.isRequired,
};
