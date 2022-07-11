/* exported lastChars */

/*
    declare function named lastChars with 2 parameter (length, string)
    initialize variable lastString with empty string ''
    if length is longer or equal to the string length return string
    loop through back wards from the length of string - 1
    concantate string at index with lastString and assign it to lastString
    return lastString
*/

function lastChars(length, string) {
  var lastString = '';
  if (length >= string.length) {
    return string;
  }
  for (var i = string.length - 1; i >= string.length - length; i--) {
    lastString = string[i] + lastString;
  }
  return lastString;
}
