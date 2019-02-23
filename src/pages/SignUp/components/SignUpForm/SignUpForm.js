import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NAMES } from 'src/constants/attributes';
import { GenericForm, GenericFormHeader, GenericFormContent }
  from 'src/components/common/GenericFormComponents';
import './sign-up-form.scss';
import Input from 'src/components/common/Input';

export class SignUpForm extends Component {

  onChange = (name, value) => {
    this.setState({
      [name]: value
    });

    this.props.onChange(name, value);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('nice try');
    this.props.onSubmit();
  };

  renderFormContent = () => (

    <GenericFormContent additionalClassNames='sign-up-form-content'>
      <div className='is-row'>
        <Input
          name={NAMES.FIRST_NAME}
          placeholder='First Name'
          onChange={this.onChange}
        />
        <Input
          name={NAMES.LAST_NAME}
          placeholder='Last Name'
          onChange={this.onChange}
        />
      </div>

      <Input
        name={NAMES.EMAIL}
        onChange={this.onChange}
        placeholder='Your Email'
      />
      <Input
        name={NAMES.COMPANY_NAME}
        onChange={this.onChange}
        placeholder='Company name'
      />

      <div className='is-row'>
        <Input
          name={NAMES.CODE}
          onChange={this.onChange}
          placeholder='Code +'
        />
        <Input
          name={NAMES.PHONE_NUMBER}
          onChange={this.onChange}
          placeholder='Phone Number'
          type='tel'
        />
      </div>

      <Input
        name={NAMES.PASSWORD}
        onChange={this.onChange}
        placeholder='Password'
        type='password'
      />
      <Input
        name={NAMES.CONFIRM_PASSWORD}
        onChange={this.onChange}
        placeholder='Confirm password'
        type='password'
      />

      <button className='button submit-button'>Sign up</button>
    </GenericFormContent>
  );

  render() {
    const formContent = this.renderFormContent();

    return (
      <GenericForm additionalClassNames='sign-up-form' onSubmit={this.onSubmit}>
        <GenericFormHeader title={'Sign Up'} />
        {formContent}
      </GenericForm>);
  }

  static defaultProps = {
    onChange: () => ({}),
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    formData: PropTypes.object.isRequired,
  };
}

export default SignUpForm;
