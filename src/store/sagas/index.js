import { all } from 'redux-saga/effects';
import { watchForSignIn } from 'src/pages/SignIn/store/sagas';
import { watchForSignUp } from 'src/pages/SignUp/store/sagas';

export default function* () {
  yield all([
      watchForSignIn(),
      watchForSignUp(),
    ]
  );
}
