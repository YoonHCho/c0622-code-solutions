/* exported take */

/*
    declare function name take with 2 parameters (array, count)
    initialize variable newArray with empty array literal
    loop through array at index, while condition is less than count
    push the string at i into newArray
    return newArray
*/

function take(array, count) {
  var newArray = [];
  if (array.length === 0) return array;
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
