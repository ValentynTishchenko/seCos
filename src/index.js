import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'; //TODO update react-router to last version
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './store/configureStore';
import Root from './pages/Root';
import './index.scss';

const store = createStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<AppContainer>
    <Root store={store} history={history} />
  </AppContainer>, document.getElementById('root')
);

//TODO: add eslint
