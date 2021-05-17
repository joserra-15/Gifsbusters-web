import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import { RiGhostSmileLine } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUpload } from 'react-icons/hi';

import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to={ROUTES.HOME} className='logo'>
        <RiGhostSmileLine />
      </NavLink>

      <div className='flex-align-center'>
        <NavLink to={ROUTES.UPLOAD} className='logo'>
          <HiOutlineUpload />
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className='logo'>
          <AiOutlineUser />
        </NavLink>
        <button type='button' className='button-bg-none logo'>
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
};
