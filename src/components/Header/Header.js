import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import { RiGhostSmileLine } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUpload } from 'react-icons/hi';

import './Header.scss';
import { authSelector } from '../../redux/auth/auth-selector';
import { selectUserByIdState } from '../../redux/user/user-selectors';
import { signOut } from '../../redux/auth/auth-actions';

export const Header = () => {
  const { currentUser, isAuthenticated } = useSelector(authSelector) || {};
  const { image } = useSelector(selectUserByIdState(currentUser)) || {};
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header className='header'>
      <NavLink to={ROUTES.HOME} className='button-icon'>
        <RiGhostSmileLine />
      </NavLink>

      <div className='flex-align-center'>
        {isAuthenticated && (
          <NavLink to={ROUTES.UPLOAD} className='button-icon'>
            <HiOutlineUpload />
          </NavLink>
        )}
        {isAuthenticated ? (
          <button
            type='button'
            className='button-bg-none button-icon'
            onClick={handleSignOut}>
            <img src={image} alt='user-profile' className='img' />
          </button>
        ) : (
          <NavLink to={ROUTES.LOGIN} className='button-icon'>
            <AiOutlineUser />
          </NavLink>
        )}
        <button type='button' className='button-bg-none button-icon'>
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
};
