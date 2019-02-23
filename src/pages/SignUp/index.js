import SignUp from './SignUp';
import { getSignUpFormData } from './store/selectors';
import { filedChanged } from '../../store/actions/common';
import { signUpRequested } from './store/actions';
import { connect } from 'react-redux';
import { ATTRIBUTE_SCOPES } from '../../constants/attributes';

export const mapStateToProps = state => ({
  formData: getSignUpFormData(state),
});

export const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(filedChanged({name, value, scope: ATTRIBUTE_SCOPES.SIGN_UP})),
  onSubmit: (login, password) => dispatch(signUpRequested(login, password)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
