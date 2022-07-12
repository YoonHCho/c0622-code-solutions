/* exported chunk */

/*
    declare function named chunk with 2 parameter (array, size)
    initialize variable endIndex = size
    initialize variable newArray with empthy array literal
    loop through, final expression increment by size
    new variable temp will be assigned with slice method, start with i and end with endIndex
    push temp to newArray
    increament endIndex by the size
    return newArray
*/

// below method using splice.
/* function chunk(array, size) {
  var endIndex = size;
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var temp = array.slice(i, endIndex);
    newArray.push(temp);
    endIndex += size;
  }
  return newArray;
} */

// below, not using slice method
function chunk(array, size) {
  var counter = size;
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var temp = [];
    for (var j = i; j < counter; j++) {
      temp.push(array[j]);
    }
    if (array.length < counter + size) {
      counter = array.length;
    } else {
      counter += size;
    }
    newArray.push(temp);
  }
  return newArray;
}
