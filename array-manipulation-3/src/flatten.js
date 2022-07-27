/* exported flatten */

/*
  declare function named flatten with 1 parameter (array)
  create new variable with empty array literal
  loop thru
  if array at i is array
  loop thru that at i array
  and push the value to newArray
  else push the array at i to newArray
  out side the for loop return newArray
*/

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        newArray.push(array[i][k]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
