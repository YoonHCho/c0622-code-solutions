/* exported getKeys */

/*
    - declare function named getKeys with 1 parameter object
    - initialize variable propArray with empty array literal
    - iterate through each property of object and
    - append the property to propArray
    - return propArray
*/

function getKeys(object) {
  var propArray = [];
  for (var prop in object) {
    propArray.push(prop);
  }
  return propArray;
}
