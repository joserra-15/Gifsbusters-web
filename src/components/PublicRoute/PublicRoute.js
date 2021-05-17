import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTES from '../../routes';

export const PublicRoute = ({ isAuthenticated, children, ...props }) => {
  return !isAuthenticated ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to={ROUTES.HOME} />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
