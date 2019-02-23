import { handleActions } from 'redux-actions';
import { signInSucceeded } from 'src/pages/SignIn/store/actions';

export const initialState = {
  accessToken: '',
  refreshToken: '',
};
export const session = handleActions({
  [signInSucceeded]: (store, {payload}) => {
    const {access_token: accessToken, refresh_token: refreshToken} = payload;
    return ({
      ...store,
      accessToken,
      refreshToken,
    });
  },
}, initialState);