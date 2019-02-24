import { call, takeLatest, select, put } from 'redux-saga/effects';
import {
  fetchAllergiesByBarcodeRequested,
  fetchAllergiesByBarcodeInFailed,
  fetchAllergiesByBarcodeSucceeded
} from '../actions/allergies';
import { getAccessToken } from '../selectors/session';
import { callApi } from 'src/store/sagas/common';
import apiGateway from 'src/api/apiGateway';
import { push } from 'react-router-redux';
import { ROUTES } from '../../constants/routes';

const STATUSES = {
  OK: 200,
};

export function* fetchAllergiesByBarcode({payload: barcode}) {
  const token = yield select(getAccessToken);
  const response = yield call(callApi,
    [apiGateway.fetchAllergiesByBarcode, {barcode, token}], {
      onSuccess: fetchAllergiesByBarcodeSucceeded,
      onFailure: fetchAllergiesByBarcodeInFailed,
    }
  );

  if (response.status === STATUSES.OK) {
    yield put(push(ROUTES.userAllergies));
  }
}

export function* watchFetchAllergiesByBarcode() {
  yield takeLatest(fetchAllergiesByBarcodeRequested.toString(), fetchAllergiesByBarcode);
}
