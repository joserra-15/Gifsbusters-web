import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import { RiGhostSmileLine } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { HiOutlineUpload } from 'react-icons/hi';
import { authSelector } from '../../redux/auth/auth-selector';
import { selectUserByIdState } from '../../redux/user/user-selectors';
import { signOut } from '../../redux/auth/auth-actions';
import { useTranslation } from 'react-i18next';

import './Header.scss';

export const Header = () => {
  const { currentUser, isAuthenticated } = useSelector(authSelector) || {};
  const { image } = useSelector(selectUserByIdState(currentUser)) || {};
  const dispatch = useDispatch();
  const [, i18n] = useTranslation('global');

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header className='header'>
      <NavLink to={ROUTES.HOME} className='button-icon'>
        <RiGhostSmileLine />
      </NavLink>

      <div className='flex-align-center'>
        <NavLink to={ROUTES.GIF} className='header__link'>
          GIF
        </NavLink>
        <NavLink to={ROUTES.MEME} className='header__link'>
          MEME
        </NavLink>
      </div>
      <div className='flex-align-center'>
        {isAuthenticated && (
          <NavLink to={ROUTES.UPLOAD} className='button-icon'>
            <HiOutlineUpload />
          </NavLink>
        )}
        {isAuthenticated ? (
          <>
            <NavLink
              to={`${ROUTES.USER_WHITHOUT_PARAM}${currentUser}`}
              className='button-bg-none button-icon'>
              <img src={image} alt='user-profile' className='img' />
            </NavLink>
            <button
              type='button'
              className='button-bg-none button-icon'
              onClick={handleSignOut}>
              <AiOutlineLogout />
            </button>
          </>
        ) : (
          <NavLink to={ROUTES.LOGIN} className='button-icon'>
            <AiOutlineUser />
          </NavLink>
        )}
        {i18n.language === 'es' ? (
          <button
            type='button'
            className='button-bg-none button-icon'
            onClick={() => i18n.changeLanguage('en')}>
            <img
              src='https://res.cloudinary.com/dwlujoptw/image/upload/v1621511166/english_khtlrv.png'
              alt='english'
              className='img'
            />
          </button>
        ) : (
          <button
            type='button'
            className='button-bg-none button-icon'
            onClick={() => i18n.changeLanguage('es')}>
            <img
              src='https://res.cloudinary.com/dwlujoptw/image/upload/v1621511170/spanish_sxhkko.png'
              alt='spanish'
              className='img'
            />
          </button>
        )}
      </div>
    </header>
  );
};
