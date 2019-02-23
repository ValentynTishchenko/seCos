import { Route, Router as ReactRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../constants/routes';
import SignIn from '../pages/SignIn';

export const Router = ({history}) => (
  <ReactRouter history={history}>
    <Route path={ROUTES.signIn} component={SignIn} />
  </ReactRouter>
);

Router.propTypes = {
  history: PropTypes.object.isRequired
};
