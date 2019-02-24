import { connect } from 'react-redux';
import { UserAllergies } from './UserAllergies';
import { push } from 'react-router-redux';
import { ROUTES } from 'src/constants/routes';

export const mapStateToProps = state => ({
  allergies: []
});

export const mapDispatchToProps = dispatch => ({
  goBack: () => {
    push(ROUTES.cosmeticScanner);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UserAllergies);