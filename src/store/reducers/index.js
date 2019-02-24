import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { signIn } from 'src/pages/SignIn/store/reducers';
import { forms } from './forms';
import { session } from './session';
import { allergies } from './allergies';


export default combineReducers({
  routing,
  signIn,
  forms,
  session,
  allergies,
});
