import { call, takeLatest } from 'redux-saga/effects';
import { signInRequested, signInSucceeded, signInFailed } from './actions';
import { callApi } from 'src/store/sagas/common';
import apiGateway from '../../../api/apiGateway';

export function* signIn() {
  const response = yield call(callApi,
    [apiGateway.signIn], {
      onSuccess: signInSucceeded,
      onFailure: signInFailed,
    }
  );

  console.log(response);
}

export function* watchForSignIn() {
  yield takeLatest(signInRequested.toString(), signIn);
}
