/* exported setValue */

/*
    - declare function with name getValues with 3 parameter object, key(string), and value
    - initialize variable newObj with a copy of object
    - check if the value is undefine, if not undefined
    - assign value to newObj at key
    - return newObj
*/

function setValue(object, key, value) {
  var newObj = object;
  if (value !== undefined) {
    newObj[key] = value;
  }
  return newObj;
}
