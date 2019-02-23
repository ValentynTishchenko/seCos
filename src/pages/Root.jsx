import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { Router } from '../routes/Router';

const Root = ({store, history}) => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
