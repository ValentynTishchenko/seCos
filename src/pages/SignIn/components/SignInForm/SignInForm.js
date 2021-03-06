import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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
    onSubmit(login, password);
  };

  renderFormContent = () => (
    <GenericFormContent additionalClassNames='sign-in-form-content'>
      <Input onChange={this.onChange} name='email' placeholder='Your Email' />
      <Input onChange={this.onChange} name='password' placeholder='Password' type='password' />
      <Button type='submit' variant="contained" color="primary">
        Sign In
      </Button>
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
