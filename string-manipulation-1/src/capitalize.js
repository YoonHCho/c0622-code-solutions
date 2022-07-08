/* exported capitalize */

/*
    1. write a function declared with name capitalize with one parameter word
    2. initialize an empty string to var capWord
    3. if the length of word is strickly equal to 1, return the return of the method touppercase() of object word from the function
    4. for loop to iterate when word.length is not 1,
    5. if i equal to zero(index), add capWord with capitalized character and assign it to capWord
    6. else when i is not equal to 0, concatinate capWord with lowercased char at index and assign it to capWord
    6. return the variable capword from the function
*/

function capitalize(word) {
  var capWord = '';
  if (word.length === 1) return word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capWord += word[i].toUpperCase();
    } else capWord += word[i].toLowerCase();
  }
  return capWord;
}
