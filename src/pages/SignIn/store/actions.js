import { createAction } from 'redux-actions';

export const signInRequested = createAction('SIGN_IN_REQUESTED');
export const signInSucceeded = createAction('SIGN_IN_SUCCEEDED');
export const signInFailed = createAction('SIGN_IN_FAILED');
