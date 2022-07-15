/* exported pick */

/*
  declare function named pick with 2 parameters (source, keys)
  initialize newArray and assign empty object literal
  loop through the source
  nested for loop to interate each key at index
  if prop is equal to keys at index
  add the assigne keys at index to prop of source object
*/

function pick(source, keys) {

  var newArray = {};
  var index = 0;
  for (var prop in source) {
    if (prop === keys[index]) {
      newArray[prop] = source[prop];
      index++;
    }
  }
  /*   console.log('source: ', source);
  console.log('newArray: ', newArray); */
  return newArray;
}
