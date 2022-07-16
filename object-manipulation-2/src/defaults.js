/* exported defaults */

/*
  declare a function named defaults with 2 parameters (target, source)
  get the length of the source
  if the length is 0
  return target
  loop through source
  initialize counter to 0
  loop through target
  if target prop equals to source prop.
  increment counter
  outside the sourceprop for loop if counter equals 0
  add the sourceProp with source value to target
  outside all loop return target
*/

function defaults(target, source) {
  var sourcelength = Object.keys(source);
  if (sourcelength.length === 0) {
    return target;
  }
  for (var sourceProp in source) {
    var counter = 0;
    for (var targetProp in target) {
      if (targetProp === sourceProp) {
        counter++;
      }
    }
    if (counter === 0) {
      target[sourceProp] = source[sourceProp];
    }
  }
  return target;
}
