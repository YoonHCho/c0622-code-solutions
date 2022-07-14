/* exported capitalizeWord */

/*
    declare function name capitalizeWord with 1 parameter (word)
    first lowercase all the letters and assign it to word
    check if word === javascript, if so
    cap index at 0 and 4.
    return word
    else cap index at 0 and concatanate rest
    return word
*/

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  } else {
    word = word[0].toUpperCase() + word.substring(1);
    return word;
  }
}
