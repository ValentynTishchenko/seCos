import { createAction } from 'redux-actions';

export const fetchAllergiesByBarcodeRequested = createAction('FETCH_ALLERGIES_BY_BARCODE_REQUESTED');
export const fetchAllergiesByBarcodeSucceeded = createAction('FETCH_ALLERGIES_BY_BARCODE_SUCCEEDED');
export const fetchAllergiesByBarcodeInFailed = createAction('FETCH_ALLERGIES_BY_BARCODE_FAILED');
