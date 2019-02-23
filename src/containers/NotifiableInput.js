import PropTypes from 'prop-types';
import Notifiable from './Notifiable';
import Input from 'src/components/common/Input';

const NotifyingInput = Notifiable(Input);

NotifyingInput.propTypes = {
  ...Input.propTypes,
  scope: PropTypes.string.isRequired
};

export default NotifyingInput;
