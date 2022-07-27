/* exported difference */

/* includes()
  declare function named difference with 2 parameter (first, second)
  create variable newArray with empty array literal
  for loop for first array and check if first at i as a value included in second,
  if not, push that to newArray
  for loop for second array check if second at i has a value included in first,
  if not, push that to newArray
  outside the loop
  return newArray
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
