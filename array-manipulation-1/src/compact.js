/* exported compact */

/*
    1. declare function named compact with parameter array.
    2. initialize variable truthyArray with an empth array literal
    3. iterate each element of array
    4. check if the value of the element at index is a thruthy value, if so
    5. append the element at index to truthyArray
    6. return truthyArray
*/

function compact(array) {
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
