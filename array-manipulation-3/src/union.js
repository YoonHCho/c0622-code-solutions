/* exported union */

/*
  declare function named union with 2 parameter (first, second)
  create variable newArray with empty array literal
  for loop thru first array and add all the values to newArray
  for looop thru second array
  if newArray doesn't include the valus of second at i,
  add second i to newArray
  outside the for loop, return newArray
*/

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!newArray.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
