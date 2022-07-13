/* exported reverseWord */

/*
    1. declare a function name reverseWord
    2. initialize a variable reversedWord with empty string
    3. since reverse, will need to start from back and loop it and decrease the index from length - 1
    4. concatinate reversedWord with the word at index
    5. return the reversedWord
*/

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
