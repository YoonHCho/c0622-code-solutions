/* exported isVowel */

/*
    1. declare a function with name isvowel with 1 parameter char
    2. set the char to uppercase as default
    3. check if the char is stricktly equal to A or E or I or O or U
    3. return true if char is strictly equall to regExp
    4. else return false
*/

function isVowel(char) {
  if (char.toUpperCase() === 'A' ||
      char.toUpperCase() === 'E' ||
      char.toUpperCase() === 'I' ||
      char.toUpperCase() === 'O' ||
      char.toUpperCase() === 'U'
  ) return true;
  return false;
}
