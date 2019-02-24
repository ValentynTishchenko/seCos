import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import CameraIcon from '@material-ui/icons/Camera';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import QrReader from 'react-qr-scanner'
import classNames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import { isTouchDevice } from '../../helpers/common';

import './qr-page.scss';


export class CosmeticScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: 'hardcodedValue',
      isCameraAllowed: false,
      isAlert: false,
      isCameraAsked: false,
      message: 'Allow camera Bitch !',
      isTouch: isTouchDevice(),
    };
    this.qrScanner = React.createRef();
  }

  handleClick = () => {
    const {fetchAllergiesByBarcode} = this.props;
    const {barcode} = this.state;


    fetchAllergiesByBarcode(barcode);
  };

  handleScanEvent = (decodedValue) => {
    if (!this.state.isCameraAllowed) this.setState({ isCameraAllowed: true });
    if (decodedValue) {
      this.props.fetchAllergiesByBarcode(decodedValue);  
    } else {
      this.setState({
        isAlert: true,
        message: 'No code found',
      })
    }
  };

  handleHideErrorEvent = () => {
    this.setState({ isAlert: false })
  };

  handleErrorEvent = () => {
    this.setState({ isAlert: true })
  };

  handleAskCamera = () => {
    if (this.state.isTouch) {
      this.qrScanner.current.openImageDialog();
    } else {
      // toggle camera
      if (this.state.isCameraAsked) {
        this.setState({
          isCameraAsked: false,
          isAlert: false,
          isCameraAllowed: false,
        })
      } else {
      this.setState({
        isCameraAsked: true,
        isAlert: true,
        message: 'Plz allow camera!',
      })
      }
    }
  };

  render() {
    const videoClass = classNames({
      'qr-page__video': true,
      'qr-page__video--on': this.state.isCameraAllowed,
      'qr-page__video--off': !this.state.isCameraAllowed,
    });
    return (
      <section className="qr-page">
        <h1>Cosmetic Scanner</h1>

        <div className={videoClass}>
          {(this.state.isTouch || this.state.isCameraAsked) && (
            <QrReader
              ref={this.qrScanner}
              delay={1000}
              className="camera"
              onScan={this.handleScanEvent}
              onError={this.handleErrorEvent}
              legacyMode={this.state.isTouch}
            />
          )}
          <CenterFocusWeakIcon />
        </div>

        <div className="addButton" onClick={this.handleAskCamera}>
          <Fab color="primary" aria-label="Scan">
            <CameraIcon />
          </Fab>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.isAlert}
          autoHideDuration={3000}
          onClose={this.handleHideErrorEvent}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />
      </section>
    );
  }

  static propTypes = {
    fetchAllergiesByBarcode: PropTypes.func.isRequired,
  };
}
