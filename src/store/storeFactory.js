import { createStore } from 'redux';
import { configureMiddleware } from 'src/middleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default (history, additionalMiddleware = []) => {
  const middleware = configureMiddleware(history, additionalMiddleware);
  const store = createStore(rootReducer, middleware.stack);

  middleware.sagas.run(rootSaga);

  return store;
}
