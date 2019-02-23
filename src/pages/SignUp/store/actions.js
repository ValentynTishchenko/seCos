import { createAction } from 'redux-actions';

export const signUpRequested = createAction('SIGN_UP_REQUESTED');
export const signUpSucceeded = createAction('SIGN_UP_SUCCEEDED');
export const signUpFailed = createAction('SIGN_UP_FAILED');
