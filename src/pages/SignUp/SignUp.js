import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './components/SignUpForm';
import './sign-up.scss';

const SignUp = ({onChange, onSubmit, formData}) => (
  <section className='sign-up-page'>
    <SignUpForm
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </section>
);

SignUp.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default SignUp;
