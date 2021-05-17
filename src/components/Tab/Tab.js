import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';

export const Tab = () => {
  return (
    <nav>
      <NavLink to={ROUTES.LOGIN}></NavLink>
      <NavLink to={ROUTES.REGISTER}></NavLink>
    </nav>
  );
};
