import React from 'react';
import PropTypes from 'prop-types';

export class CosmeticScanner extends React.Component {
  state = {
    barcode: 'hardcodedValue'
  };

  handleClick = () => {
    const {fetchAllergiesByBarcode} = this.props;
    const {barcode} = this.state;


    fetchAllergiesByBarcode(barcode);
  };

  render() {
    return (
      <section>
        <h1>Cosmetic Scanner</h1>
        <p><input onClick={this.handleClick} type="button" value='scan it' /></p>
      </section>
    );
  }

  static propTypes = {
    fetchAllergiesByBarcode: PropTypes.func.isRequired,
  };
}