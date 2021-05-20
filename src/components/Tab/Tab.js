import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import { useTranslation } from 'react-i18next';

import './Tab.scss';

export const Tab = () => {
  const [t] = useTranslation('global');
  return (
    <nav className='tab'>
      <NavLink
        to={ROUTES.LOGIN}
        activeClassName='tab__link-active'
        className='tab__link'>
        {t('login.sign-in')}
      </NavLink>
      <NavLink
        to={ROUTES.REGISTER}
        activeClassName='tab__link-active'
        className='tab__link'>
        {t('login.sign-up')}
      </NavLink>
    </nav>
  );
};
