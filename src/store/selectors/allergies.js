import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';

export const getAllergiesState = state => propertyOrEmptyObject(state, 'allergies');

export const getAllergies = createSelector(
  [getAllergiesState],
  (allergies) => allergies.userAllergies || []
);

export const isAllergiesLoaded = createSelector(
  [getAllergiesState],
  allergies => allergies.isLoaded
);

export const isAllergiesLoading = createSelector(
  [getAllergiesState],
  allergies => allergies.isLoading
);