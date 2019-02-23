import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import get from 'lodash/get';

const configureMiddleware = (history, additionalMiddleware = []) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const loggerMiddleware = createLogger({
    predicate: () => {
      return get(window, ['MY_REDUX_LOGGER', 'enabled'], true);
    }
  });

  const middlewareKeys = {
    router: routerMiddleware,
    sagas: sagaMiddleware
  };

  const middleware = [
    routerMiddleware,
    sagaMiddleware
  ];

  if (process.env.NODE_ENV !== 'production') {
    window.MY_REDUX_LOGGER = {enabled: true};
    window.USE_DEV_TOOLS = false;
    middlewareKeys.logger = loggerMiddleware;
    middleware.push(loggerMiddleware);
  }


  return {
    ...middlewareKeys,
    stack: compose(applyMiddleware(...middleware), ...additionalMiddleware)
  };
};
export { configureMiddleware };