import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/common/Input';
import './with-label.scss';

const InputWithLabel = props => {

  return (
    <span className='with-label-input'>
      <label className='with-label-input__label'>{props.labelText}</label>
      <Input {...props} />
    </span>
  );
};

InputWithLabel.propTypes = {
  ...Input.propTypes,
  labelText: PropTypes.string.isRequired
};
export default InputWithLabel;
