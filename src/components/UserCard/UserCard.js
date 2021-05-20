import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectUserByIdState } from '../../redux/user/user-selectors';
import { ROUTES } from '../../routes/routes';

import './UserCard.scss';
import { useSelector } from 'react-redux';

export const UserCard = ({ userId }) => {
  const { userName, image } = useSelector(selectUserByIdState(userId)) || {};

  return (
    <div className='user-card'>
      <Link
        to={`${ROUTES.USER_WHITHOUT_PARAM}${userId}`}
        className='user-card-container'>
        <div className='user-card-container__img'>
          <img src={image} alt={userName} className='img' />
        </div>
        <h4 className='user-card-container__info'>{userName || 'Unknown'}</h4>
      </Link>
    </div>
  );
};

UserCard.propType = {
  userId: PropTypes.string.isRequired,
};
