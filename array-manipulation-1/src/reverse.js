/* exported reverse */

/*
    1. declare function named reverse with 1 parameter array
    2. initialize variable reverseArray and assign with empty array literal
    3. need to iterate, but from the last element, initialize i with the last element (length - 1), condition til the i is >= 0 to include the first element, decrease i to lower the index
    4. append each elements at index to reverseArray
    5. return reverseArray
*/

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
