/* exported isUpperCased */

/*
    1. declare a function name isUpperCased with one parameter word
    2. check if each char, at index, is strictly not equal to capitalized char of that index
    3. if true, when not equal, return false
    4. else return true
*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
