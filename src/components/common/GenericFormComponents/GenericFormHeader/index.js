import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from 'src/helpers/common';
import './generic-form-header.scss';

const GenericFormHeader = ({title, additionalClassNames}) => (
  <header className={combineClassNames('generic-form-header', additionalClassNames)}>
    <h1>{title}</h1>
  </header>
);

GenericFormHeader.defaultProps = {
  additionalClassNames: []
};

GenericFormHeader.propTypes = {
  additionalClassNames: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default GenericFormHeader;
