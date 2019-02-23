import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { signIn } from 'src/pages/SignIn/store/reducers';
import { forms } from './forms';

export default combineReducers({
  routing,
  signIn,
  forms,
});
