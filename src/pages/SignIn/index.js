import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signInRequested } from './store/actions';

export const mapStateToProps = state => ({});
export const mapDispatchToProps = dispatch => ({
  signIn: (login, password) => dispatch(signInRequested(login, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
