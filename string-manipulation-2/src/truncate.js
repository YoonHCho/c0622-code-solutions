/* exported truncate */

/*
    declare function name truncate with 2 parameter length and string
    initialize variable newString with ...
    if no string is passed, return '...'
    if length is greater than the length of string, return string + '...'
    iterate through the string at index less then the length and
    concatenate newString with the sting at index and assign it to newString
    end of the for loop, push '...' to newString
    return newString

    if need to return the passed parameter string instead of new variable newString, use substring.
*/

function truncate(length, string) {
  var newString = '';
  if (string.length === 0) {
    return '...';
  } else if (length > string.length) {
    return string + '...';
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}
