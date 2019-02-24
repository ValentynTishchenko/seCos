import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';

export const getSession = state => propertyOrEmptyObject(state, 'session');

const sessioMockedn = 'fdd822c7-eedf-47f6-88b2-19949f2c33b1';
export const getAccessToken = createSelector(
  [getSession],
  session => session.accessToken || sessioMockedn,
  )
;