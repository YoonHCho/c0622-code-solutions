/* exported tail */

/*
    1. declare a function name tail with 1 parameter array
    2. initialize variable newArray with an empty array literal.
    3. need to exclude the first element of the array which is index 0, then need to iterate a loop starting 1
    4. append the element at index to the newArray
    5. return newArray
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
