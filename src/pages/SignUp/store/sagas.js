import { call, takeLatest, select } from 'redux-saga/effects';
import { signUpFailed, signUpRequested, signUpSucceeded } from './actions';
import { callApi } from 'src/store/sagas/common';
import { getSignUpFormData } from 'src/store/selectors/common';
import apiGateway from 'src/api/apiGateway';
import { DEFAULT_CULTURE } from '../../../constants/common';

const fuxture = {
  defaultCulture: DEFAULT_CULTURE,
  accountName: 'FirsName LastName',
  registrationEmailAddress: 'testEmailAddress@gmail.com',
  accountAddresses: [],
  contactPersonName: '380687894034',
  userPassword: 'testPassword',
};

export function* signUp() {
  const {accountName, registrationEmailAddress, accountAddresses, contactPersonName, userPassword} = yield select(getSignUpFormData);

  const payload = {
    defaultCulture: DEFAULT_CULTURE,
    accountName,
    registrationEmailAddress,
    accountAddresses,
    contactPersonName,
    userPassword
  };
  const response = yield call(callApi,
    [apiGateway.signUp, payload], {
      onSuccess: signUpSucceeded,
      onFailure: signUpFailed,
    }
  );

  console.log(response);
}

export function* watchForSignUp() {
  yield takeLatest(signUpRequested.toString(), signUp);
}
