/* exported ransomCase */

/*
    declare function named ransomCase with 1 parameter (string)
    initialize variable newString with empty string.
    iterate through
    for all odd index numbers uppercase and concatenate
    for string at 0 and even index numbers lowercase and concatenate
    return newString
*/

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
