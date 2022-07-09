/* exported getValues */

/*
    - declare function named getValues with 1 parameter object
    - initialize variable valueArray with empty array literal
    - iterate through object
    - append the value of the property of the object to valueArray
    - return valueArray
*/

function getValues(object) {
  var valueArray = [];
  for (var prop in object) {
    valueArray.push(object[prop]);
  }
  return valueArray;
}
