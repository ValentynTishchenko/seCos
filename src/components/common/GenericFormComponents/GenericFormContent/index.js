import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from 'src/helpers/common';
import './generic-form-content.scss';

const GenericFormContent = ({children, additionalClassNames}) => (
  <main className={combineClassNames('generic-form-content', additionalClassNames)}>
    {children}
  </main>
);

GenericFormContent.defaultProps = {
  additionalClassNames: []
};

GenericFormContent.propTypes = {
  additionalClassNames: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default GenericFormContent;
