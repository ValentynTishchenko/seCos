import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from 'src/helpers/common';
import './generic-form.scss';

class GenericForm extends Component {
  render() {
    const {onSubmit, children, additionalClassNames} = this.props;
    return (
      <form className={combineClassNames('generic-form', additionalClassNames)} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }

  static defaultProps = {
    additionalClassNames: []
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    additionalClassNames: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };
}

export default GenericForm;
