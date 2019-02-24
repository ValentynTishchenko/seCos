import { createStore } from 'redux';
import { configureMiddleware } from 'src/middleware';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import rootSaga from './sagas';
import localForage from 'localforage';
import immutableTransform from 'redux-persist-transform-immutable';

export default (history, additionalMiddleware = []) => {
  const middleware = configureMiddleware(history, additionalMiddleware);
  const store = createStore(rootReducer, middleware.stack);

  persistStore(store, {
    whitelist: ['session', 'subscriptionBanner'],
    transforms: [immutableTransform()],
    storage: localForage
  });

  middleware.sagas.run(rootSaga);

  return store;
}
