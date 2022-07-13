/* exported includes */

/*
    declare function named includes with 2 parameter (array, value)
    loop through array if array.indexOf(value) is not equal to -1 return true
    else false
*/

function includes(array, value) {
  if (array.indexOf(value) !== -1) {
    return true;
  } else {
    return false;
  }
}
