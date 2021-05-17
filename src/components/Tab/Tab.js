import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';

import './Tab.scss';

export const Tab = () => {
  return (
    <nav className='tab'>
      <NavLink
        to={ROUTES.LOGIN}
        activeClassName='tab__link-active'
        className='tab__link'>
        Sign in
      </NavLink>
      <NavLink
        to={ROUTES.REGISTER}
        activeClassName='tab__link-active'
        className='tab__link'>
        Sign up
      </NavLink>
    </nav>
  );
};
