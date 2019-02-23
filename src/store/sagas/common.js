import { map, isFunction, flatten, head, tail } from 'lodash';
import { call, put, all, select } from 'redux-saga/effects';

export function* callApi(
  gatewayParameters,
  {
    onSuccess = () => {
    },
    onFailure = () => {
    },
    successPayload = {},
    failurePayload = {},
    //failureCode = NotificationCodes.SOMETHING_WENT_WRONG,
    failureCases = {},
  }) {
  try {
    const method = head(gatewayParameters);
    let args = tail(gatewayParameters);

    if (head(args) && isFunction(head(args))) {
      const argsFactory = head(args);
      const argsSelectors = head(tail(args));

      args = argsFactory(yield all(map(argsSelectors, selector => select(selector))));
    }

    const response = yield call.apply(this, flatten([method, args]));

    if (response.ok) {
      yield put(onSuccess());
    } else {
      yield put(onFailure());
    }
    return response;
  } catch (error) {
    const failurePayload = failureCases.default || {code: 404};

    yield put(onFailure(failurePayload));
  }
}
