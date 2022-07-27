/* exported intersection */

/*
  declare function named intersection with 2 parameters (first, second)
  create variable newArray with empty array literal
  for loop thru first array
  if second array includes the value of first at i,
  add the value to the newArray
  outside the for loop return newArray
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
