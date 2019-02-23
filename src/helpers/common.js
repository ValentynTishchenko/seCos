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
