/* exported initial */

/*
    1. declare a function name initial with 1 parameter array
    2. initialize variable newArray with an empth array literal
    3. need to iterate until before the last element. condition will have to be less than the length - 1,
       will not execute the last element since the condition has to be less
    4. append elements at index to newArray
    5. return newArray
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
