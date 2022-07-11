/* exported numVowels */

/*
    declare function named numVowels with 1 parameter (string)
    initialize variable with number 0 as a counter for numbers of vowels
    make all characters of string to lower case.
    loop through string at 0 through.
    check if string at index is a, e, i, o, u. if so
    increments++
    return counter
*/

function numVowels(string) {
  var counter = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
