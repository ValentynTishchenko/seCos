import { isNil, isArray, isEmpty, head, tail } from 'lodash';

export const combineClassNames = (baseClassName, additionalClassNames) => {
  additionalClassNames = Array.isArray(additionalClassNames) ? additionalClassNames : [additionalClassNames];
  return [baseClassName, ...additionalClassNames].join(' ');
};

const propertyOr = (defaultValue, object, propertyOrArray) => {
  if (isArray(propertyOrArray)) {
    if (isEmpty(propertyOrArray)) {
      return object;
    }
    const firstProperty = head(propertyOrArray);
    const remainingProperties = tail(propertyOrArray);
    const objectForFirstProperty = propertyOr(defaultValue, object, firstProperty);

    return propertyOr(defaultValue, objectForFirstProperty, remainingProperties);
  }
  if (isNil(object)) {
    return defaultValue;
  }
  if (isNil(object[propertyOrArray])) {
    return defaultValue;
  }
  return object[propertyOrArray];
};

export const propertyOrNull = (object, property) => propertyOr(null, object, property);
export const propertyOrEmptyObject = (object, property) => propertyOr({}, object, property);

export const isTouchDevice = () => {
  // this method was taken from Modernizr library
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  // eslint-disable-next-line func-names
  const mq = function (query) {
    return window.matchMedia(query).matches;
  };
  if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
    return true;
  }
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}
