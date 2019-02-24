import { all } from 'redux-saga/effects';
import { watchForSignIn } from 'src/pages/SignIn/store/sagas';
import { watchFetchAllergiesByBarcode } from './allergies';

export default function* () {
  yield all([
      watchForSignIn(),
      watchFetchAllergiesByBarcode(),
    ]
  );
}
