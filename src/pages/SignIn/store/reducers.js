import { handleActions } from 'redux-actions';
import { signInRequested } from './actions';

const initialState = {};

export const signIn = handleActions({
  [signInRequested]: state => {
    console.log(signInRequested);
    return state;
  }
}, initialState);
