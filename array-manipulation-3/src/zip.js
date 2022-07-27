/* exported zip */

/*
  declare a function named zip with 2 parameters (first, second)
  create variable pairArray with empty array literal
  assign 0 to a variable shorterLength to use a a condition expression
  if firstlength less than second, first is assigned to shorterlength, if second is less than first second is assigned as shorterlength
  if they are equal using first as shorterlength
  for loop thru while i is less than the shorterlength
  push first at i and second at i to pariArray
  outside the for loop return pairArray
*/

function zip(first, second) {
  var pairArray = [];
  var shorterLength = 0;
  if (first.length > second.length) {
    shorterLength = second.length;
  } else if (first.length < second.length) {
    shorterLength = first.length;
  } else if (first.length === second.length) {
    shorterLength = first.length;
  }
  for (var i = 0; i < shorterLength; i++) {
    pairArray.push([first[i], second[i]]);
  }
  return pairArray;
}
