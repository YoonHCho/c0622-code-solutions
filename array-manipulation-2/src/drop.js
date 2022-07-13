/* exported drop */

/*
    declare function name drop with 2 parameters (array, count)
    if array.length is 0, return array
    initialize variable newArray with empty array literal
    loop through, assigning the initializatioin i with the count.
    push array at i to newArray
    return newArray
*/

function drop(array, count) {
  if (array.length === 0) return array;
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
