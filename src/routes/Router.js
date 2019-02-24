import { Route, Router as ReactRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../constants/routes';
import SignIn from '../pages/SignIn';
import UserAllergies from '../pages/UserAllergies';
import CosmeticScanner from '../pages/CosmeticScanner';
import Profile from '../pages/Profile';
import MainWrapper from '../pages/MainWrapper';


export const Router = ({history}) => (
  <ReactRouter history={history}>
    <Route path={ROUTES.home} component={MainWrapper}>
      <Route path={ROUTES.signIn} component={SignIn} />
      <Route path={ROUTES.userAllergies} component={UserAllergies} />
      <Route path={ROUTES.profile} component={Profile} />
      <Route path={ROUTES.cosmeticScanner} component={CosmeticScanner} />
    </Route>
  </ReactRouter>
);

Router.propTypes = {
  history: PropTypes.object.isRequired
};
