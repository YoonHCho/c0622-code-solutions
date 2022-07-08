/* exported isLowerCased */

/*
    1. declare function with name islowercased with parameter word
    2. need to iterate each char of word at index
    3. check each char is not strictly equal to lower case of that char at index
    4. if not lower case, return false
    5. after iteration, return true
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
