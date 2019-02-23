import React from 'react';
import SignInForm from './components/SignInForm';
import './sign-in.scss';

const SignIn = ({signIn}) => (
  <section className='sign-in-page'>
    <SignInForm onSubmit={signIn} />
  </section>);

export default SignIn;
