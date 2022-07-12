/* exported takeRight */

/*
    declare function name takeRight with 2 parameter (array, count)
    initialize variable newArray with empty array literal
    loop through, make condition while less than array.length - count
    push each array at i to newArray
    return newArray
*/

function takeRight(array, count) {
  if (array.length === 0 || array.length < count) return array;
  var newArray = [];
  for (var i = array.length - 1; i >= array.length - count; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
