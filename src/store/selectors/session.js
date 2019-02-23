import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';

export const getSession = state => propertyOrEmptyObject(state, 'session');

export const getAccessToken = createSelector(
  [getSession],
  session => session.accessToken
);