/* exported equal */

/*
  declare function named equal with 2 parameter (first, second)
  if first.length and second.length equals 0
  check if both are Array.isArray([]) === return true;
  else return false
  if first.legnth and second.length is not equal return false;
  loop through while i < first.length
  if first at i !== second !== i return false,
  after the loop return true;

*/

function equal(first, second) {
  if (first.length === 0 && second.length === 0) {
    if (Array.isArray(first) === Array.isArray(second)) {
      return true;
    } else {
      return false;
    }
  }

  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
