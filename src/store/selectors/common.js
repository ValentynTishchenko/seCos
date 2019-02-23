import { createSelector } from 'reselect';
import { propertyOrEmptyObject } from 'src/helpers/common';
import { ATTRIBUTE_SCOPES, NAMESPACES } from '../../constants/attributes';

export const getForms = state => propertyOrEmptyObject(state, ['common', NAMESPACES.FORMS]);

export const getSignUpFormData = createSelector([getForms], forms => propertyOrEmptyObject(forms, forms[ATTRIBUTE_SCOPES.SIGN_UP]));
