/* exported reverseWords */

/*
  declare function named reverseWords with 1 parameter (string)
  use method split to by dividing the string where there is an empty space and assign to newArray
  create a newString variable ArrayToString and assign it to an empty array literal
  for loop thru the array
  for loop for each array from the end,
  push the reversed per array to newString
  use join method with whitespace of newString
  return newString
*/

function reverseWords(string) {
  var stringToArr = string.split(' ');
  var arrayToString = [];
  for (var i = 0; i < stringToArr.length; i++) {
    var newString = '';
    for (var k = stringToArr[i].length - 1; k >= 0; k--) {
      newString += stringToArr[i][k];
    }
    arrayToString.push(newString);
  }
  return arrayToString.join(' ');
}
