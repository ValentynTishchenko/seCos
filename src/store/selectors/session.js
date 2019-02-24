import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';

export const getSession = state => propertyOrEmptyObject(state, 'session');

const sessioMockedn = '5fa06bbd-07bc-48fe-8d01-0fa1e3dbb369';
export const getAccessToken = createSelector(
  [getSession],
  session => session.accessToken || sessioMockedn,
  )
;