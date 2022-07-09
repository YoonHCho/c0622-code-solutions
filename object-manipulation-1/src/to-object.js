/* exported toObject */

/*
    - declare function named toObject with 1 parameter keyValuePair
    - initialize variable keyValueObject
    - iterate through property of the
*/

function toObject(keyValuePair) {
  var keyValueObject = {};
  keyValueObject[keyValuePair[0]] = keyValuePair[1];
  return keyValueObject;
}
