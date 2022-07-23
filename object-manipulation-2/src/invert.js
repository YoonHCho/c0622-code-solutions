/* exported invert */

/*
  declare named function invert with 1 parameter (source)
  initialize a new varialbe with an empty object literal
  loop throu source using for...in loop
  add to newObj[source[prop]] = prop
  outside the for in loop return newObj.
*/

function invert(source) {
  var newObj = {};
  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
