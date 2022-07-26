/* exported titleCase */

/*
methods that might be helpful use includes(for - & : ), indexOf(for - & :) can also work in array as long as at i is the object of the methods
  declare a function named titleCase with 1 parameter (string)
  make all letters of the string lowercase
  split by whitespace and assign to new variable splitStringToArray
  create new variable for empty array literal
  for loop thru the splitStringToArray
  new variable to check each array as as a string and to push this string to newArray
  make all first letter of each array uppercase and push to newarrayToString
  if perString is Javascript / Javascript: / Api
  reassign accordingly JavaScript/JavaScript:/API
  and replace the current perString with newArrayToString at i
  else if splitStringToArray at i length is less 4
  if previously had an undefined or :, keep the uppercase
  create variable with minorWords that needs to be lowerCase
  else if perString is equal to the minorWords
  change it to lower case and replace
  outside if less than, if perString includes '-'
  get the index of the -
  concatenate according so that the index after - is uppercased
  join newArrayToString and assign to result
  return result
*/

function titleCase(string) {
  string = string.toLowerCase();
  var splitStringToArray = string.split(' ');
  var newArrayToString = [];
  for (var i = 0; i < splitStringToArray.length; i++) {
    var perString = '';
    perString += splitStringToArray[i][0].toUpperCase() + splitStringToArray[i].substring(1);
    newArrayToString.push(perString);
    if (perString === 'Javascript') {
      perString = 'JavaScript';
      newArrayToString.splice([i], 1, perString);
    } else if (perString === 'Javascript:') {
      perString = 'JavaScript:';
      newArrayToString.splice([i], 1, perString);
    } else if (perString === 'Api') {
      perString = 'API';
      newArrayToString.splice([i], 1, perString);
    } else if (splitStringToArray[i].length < 4) {
      if (splitStringToArray[i - 1] === undefined || splitStringToArray[i - 1][splitStringToArray[i - 1].length - 1] === ':') {
        continue;
      } else {
        var minorWords = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
        for (var k = 0; k < minorWords.length; k++) {
          if (minorWords[k] === perString) {
            perString = perString.toLowerCase();
            newArrayToString.splice([i], 1, perString);
          }
        }
      }
    } else if (perString.includes('-')) {
      var index = perString.indexOf('-');
      perString = perString.substring(0, index + 1) + perString[index + 1].toUpperCase() + perString.substring(index + 2);
      newArrayToString.splice([i], 1, perString);
    }
  }
  var result = newArrayToString.join(' ');
  return result;
}
