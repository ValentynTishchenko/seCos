import { connect } from 'react-redux';
import { CosmeticScanner } from './CosmeticScanner';
import { fetchAllergiesByBarcodeRequested } from './store/actions';

export const mapStateToProps = state => ({});
export const mapDispatchToProps = dispatch => ({
  fetchAllergiesByBarcode: barcode => {
    dispatch(fetchAllergiesByBarcodeRequested(barcode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CosmeticScanner);