import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';
import { ATTRIBUTE_SCOPES, NAMESPACES } from 'src/constants/attributes';

export const getForms = state => propertyOrEmptyObject(state, [NAMESPACES.FORMS]);

export const getSignUpFormData = createSelector([getForms], forms => propertyOrEmptyObject(forms, [ATTRIBUTE_SCOPES.SIGN_UP]));
