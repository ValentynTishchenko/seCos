import { call, takeLatest, select } from 'redux-saga/effects';
import {
  fetchAllergiesByBarcodeRequested,
  fetchAllergiesByBarcodeInFailed,
  fetchAllergiesByBarcodeSucceeded
} from '../actions/allergies';
import { getAccessToken } from '../selectors/session';
import { callApi } from 'src/store/sagas/common';
import apiGateway from 'src/api/apiGateway';

export function* fetchAllergiesByBarcode(barcode) {
  const token = yield select(getAccessToken);
  console.log(token);
  yield call(callApi,
    [apiGateway.fetchAllergiesByBarcode, {barcode, token}], {
      onSuccess: fetchAllergiesByBarcodeSucceeded,
      onFailure: fetchAllergiesByBarcodeInFailed,
    }
  );
}

export function* watchFetchAllergiesByBarcode() {
  yield takeLatest(fetchAllergiesByBarcodeRequested.toString(), fetchAllergiesByBarcode);
}
