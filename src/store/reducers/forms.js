import { handleActions } from 'redux-actions';
import { filedChanged } from '../actions/common';

const getForm = (store, scope) => {
  const form = store[scope] || {};
  return Object.assign({}, form);
};

const updateFormField = (store, {value, name, scope}) => {
  const form = getForm(store, scope);
  form[name] = value;

  return {
    ...store, [scope]: form
  };
};

const initialState = {};

export const forms = handleActions({
  [filedChanged]: (state, {payload}) => updateFormField(state, payload),
}, initialState);
