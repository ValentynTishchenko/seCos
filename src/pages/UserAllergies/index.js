import { connect } from 'react-redux';
import { UserAllergies } from './UserAllergies';
import { push } from 'react-router-redux';
import { ROUTES } from 'src/constants/routes';
import { getAllergies, isAllergiesLoaded, isAllergiesLoading } from '../../store/selectors/allergies';

export const mapStateToProps = state => ({
  allergies: getAllergies(state),
  isAllergiesLoaded: isAllergiesLoaded(state),
  isAllergiesLoading: isAllergiesLoading(state),
});

export const mapDispatchToProps = dispatch => ({
  goBack: () => {
    push(ROUTES.cosmeticScanner);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UserAllergies);