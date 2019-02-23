import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    const {value = ''} = props;
    this.state = {
      value
    };
  }

  onChange = e => {
    const {value, name} = e.target;

    this.setState({value});

    this.props.onChange(name, value, e);
  };

  render() {
    const {value} = this.state;
    const {placeholder, name, disabled, type, required} = this.props;
    return (
      <input
        required={required}
        value={value}
        onChange={this.onChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className='input'
        type={type}
      />
    );
  }

  static defaultProps = {
    onChange: () => ({}),
    required: false,
    disabled: false,
    type: 'input',
  };

  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };
}

export default Input;
