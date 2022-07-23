/* exported omit */

/*
  declare function name omit with 2 parameters (source, keys)
  initialize variable newObj with empty object literal
  loop through the source with for... in loop
  create a counter to count with 0
  for loop to iterate through keys
  if prop is equal to keys at index
  increment counter
  if counter = 0, add to the key and the value to newObj (then go back to step 3 until all props are iterated)
  add to newObj
*/

function omit(source, keys) {
  var newObj = {};

  for (var prop in source) {
    var counter = 0;
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        counter++;
      }
    }
    if (counter === 0) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
