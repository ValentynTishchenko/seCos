import { Route, Router as ReactRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../constants/routes';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const Router = ({history}) => (
  <ReactRouter history={history}>
    <Route path={ROUTES.signIn} component={SignIn} />
    <Route path={ROUTES.signUp} component={SignUp} />
  </ReactRouter>
);

Router.propTypes = {
  history: PropTypes.object.isRequired
};
