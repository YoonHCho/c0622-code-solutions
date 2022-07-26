/* exported isPalindromic */

/*
  declare function named isPalindromic with one parameter (string)
  replace all the whitespace with empty string so there is no whitespaces set assign this to a new variable
  create an empty variable for the endsString
  loop throu theString from end to begin and concatenate to endString.
  return the result of the express if theString and endString is equal
*/

function isPalindromic(string) {
  var theString = string.replaceAll(' ', '');
  var endString = '';
  for (var i = theString.length - 1; i >= 0; i--) {
    endString += theString[i];
  }
  return theString === endString;
}
