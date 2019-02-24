import { handleActions } from 'redux-actions';
import { fetchAllergiesByBarcodeRequested } from '../actions/allergies';

const initialState = {
  isLoading: false,
  userAllergies: [],
};

export const allergies = handleActions({
  [fetchAllergiesByBarcodeRequested]: state => {
    return {
      ...state,
      isLoading: true,
    };
  }
}, initialState);
