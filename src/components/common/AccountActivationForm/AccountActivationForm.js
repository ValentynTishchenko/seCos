import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Input from 'src/components/common/Input';
import GenericForm from 'src/components/common/GenericFormComponents/GenericForm';
import GenericFormHeader from 'src/components/common/GenericFormComponents/GenericFormHeader';
import GenericFormContent from 'src/components/common/GenericFormComponents/GenericFormContent';
import InputWithLabel from 'src/components/common/InputWithLabel';
import './account-activation-form.scss';

class AccountActivationForm extends PureComponent {
  state = {
    isUserTryActivate: false,
  };

  onChange = (fieldName, value) => {
    this.setState({[fieldName]: value});
  };

  onSubmit = e => {
    e.preventDefault();

    console.log('nice try');
    return false;
  };

  onClick = e => {
    e.stopPropagation();
    console.log('nice try 2');
  };

  renderFormContent = () => {
    const passportInputLabelText = 'In order to activate your account, please type your password';

    return (
      <GenericFormContent additionalClassNames='account-activation-form__content'>
        <Input
          onChange={this.onChange}
          name='registrationConfirmationCode'
          placeholder='Registration Confirmation Code'
        />
        <InputWithLabel
          labelText={passportInputLabelText}
          onChange={this.onChange}
          name='password' placeholder='Password'
          type='password' />
        <Input
          onChange={this.onChange}
          name='confirmPassword'
          placeholder='Confirm password'
          type='password'
        />

        <button
          type='button'
          onClick={this.onClick}
          className='button submit-button'>
          Activate
        </button>
      </GenericFormContent>
    );
  };

  render() {
    const formContent = this.renderFormContent();

    return (
      <GenericForm additionalClassNames='account-activation-form' onSubmit={this.onSubmit}>
        <GenericFormHeader title='Account activation' />
        {formContent}
      </GenericForm>
    );
  }

  static defaultProps = {
    isUserActivated: false,
    isAttemptSuccess: false,
  };

  static propTypes = {
    isUserActivated: PropTypes.bool.isRequired,
    isAttemptSuccess: PropTypes.bool,
  };
}

export default AccountActivationForm;
