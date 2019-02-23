import { connect } from 'react-redux';

import { filedChanged } from 'src/store/actions/common';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import omit from 'lodash/omit';

const findAttribute = (state, name, scope) => {
  const scopedState = state[scope];

  return isEmpty(scopedState) ? {} : find(scopedState.attributes, ['name', name]);
};

export const mapStateToProps = (state, ownProps) => {
  return Object.assign({},
    ownProps,
    findAttribute(state, ownProps.name, ownProps.scope));
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange(arg) {
    const scope = ownProps.scope;
    dispatch(filedChanged({
      ...arg,
      scope
    }));
    if (ownProps.onChange) {
      ownProps.onChange(arg);
    }
  }
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
  /* this is dirty hack, should be improved on "framework" level */
  const isOwnPropsPrioritised = ownProps.notifiableOwnPropsPrioritised;

  ownProps = omit(ownProps, ['notifiableOwnPropsPrioritised']);
  stateProps = omit(stateProps, ['notifiableOwnPropsPrioritised']);

  return Object.assign({},
    ownProps,
    isOwnPropsPrioritised ? omit(stateProps, Object.keys(ownProps)) : stateProps,
    dispatchProps
  );
};
export default (component) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
