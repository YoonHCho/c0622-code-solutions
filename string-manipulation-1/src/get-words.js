/* exported getWords */

/*
    1. declare a function with name getword with 1 parameter string
    2. initialize a variable with an empty array literal
    3. check if it's a empty string, if so, return empty variable else
    3. use a string method to separate each word with a space
    4. result of expression in step 3 is assigned to the variable
    5. return the variable
*/

function getWords(string) {
  var newArray = [];
  if (string === '') {
    return newArray;
  } else {
    newArray = string.split(' ');
    return newArray;
  }
}
