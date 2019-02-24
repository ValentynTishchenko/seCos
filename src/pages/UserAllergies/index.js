import { connect } from 'react-redux';
import { UserAllergies } from './UserAllergies';
import { push } from 'react-router-redux';
import { ROUTES } from 'src/constants/routes';
import { getAllergies, isAllergiesLoaded, isAllergiesLoading } from '../../store/selectors/allergies';

export const mapStateToProps = state => ({
  // allergies: getAllergies(state),
  allergies: [{"id":1,"name":"Пиво","disease":"Може вирости пузо"}],
  isAllergiesLoaded: isAllergiesLoaded(state),
  isAllergiesLoading: isAllergiesLoading(state),
});

export const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(push(ROUTES.cosmeticScanner));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UserAllergies);