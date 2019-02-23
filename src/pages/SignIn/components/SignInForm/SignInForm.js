import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Input from 'src/components/common/Input';
import GenericForm from 'src/components/common/GenericFormComponents/GenericForm';
import GenericFormHeader from 'src/components/common/GenericFormComponents/GenericFormHeader';
import GenericFormContent from 'src/components/common/GenericFormComponents/GenericFormContent';
import './sign-in.scss';

class SignInForm extends PureComponent {
  state = {
    login: '',
    password: '',
    confirmPassword: ''
  };

  onChange = (fieldName, value) => {
    this.setState({[fieldName]: value});
  };

  onSubmit = e => {
    e.preventDefault();
    const {onSubmit} = this.props;
    const {login, password} = this.state;
    console.log('nice try');
    onSubmit(login,password);
  };

  renderFormContent = () => (
    <GenericFormContent additionalClassNames='sign-in-form-content'>
      <Input onChange={this.onChange} name='email' placeholder='Your Email' />
      <Input onChange={this.onChange} name='password' placeholder='Password' type='password' />
      <Input onChange={this.onChange} name='confirmPassword' placeholder='Confirm password'
             type='password' />
      <Link style={{alignSelf: 'flex-end'}} to='/forgot-password'>Forgot Password ?</Link>
      <button className='button submit-button'>Sign In</button>
    </GenericFormContent>
  );

  render() {
    const formContent = this.renderFormContent();

    return (
      <GenericForm onSubmit={this.onSubmit}>
        <GenericFormHeader title='Sign In' />
        {formContent}
      </GenericForm>
    );
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
}

export default SignInForm;
