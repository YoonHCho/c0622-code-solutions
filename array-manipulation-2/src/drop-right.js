/* exported dropRight */

/*
    declare function named dropRight with 2 parameter(array, count)
    initialize newArray to empty array literal
    loop through with condition length - count
    push array at i to newArray.
    return newArray

*/

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
