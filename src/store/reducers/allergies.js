import { handleActions } from 'redux-actions';
import { fetchAllergiesByBarcodeRequested, fetchAllergiesByBarcodeSucceeded } from '../actions/allergies';

const initialState = {
  isLoading: false,
  isLoaded: false,
  userAllergies: [],
};

export const allergies = handleActions({
  [fetchAllergiesByBarcodeRequested]: state => ({
    ...state,
    isLoading: true,
  }),
  [fetchAllergiesByBarcodeSucceeded]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    userAllergies: payload,
  }),
}, initialState);
