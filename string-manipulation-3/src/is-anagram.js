/* exported isAnagram */

/*
  declare a function named isAnagram with 2 parameter (firstString, secondString)
  set a counter to increment when same with comparing secondString with firstString
  create new variable afterReplaceSecondString with empty string
  loop throu firstString
  loop throu secondString
  if firstString at [i] matches secondString at [i]
  replace secondString at[i] and break.

*/

function isAnagram(firstString, secondString) {
  var counter = 0;
  var checkFirst = firstString.replaceAll(' ', '');
  var checkSecond = secondString.replaceAll(' ', '');

  for (var i = 0; i < checkFirst.length; i++) {
    for (var k = 0; k < checkSecond.length; k++) {
      if (checkFirst[i] === checkSecond[k]) {
        checkSecond = checkSecond.replace(checkSecond[k], '');
        counter++;
        break;
      }
    }
  }
  if (counter === checkFirst.length && checkSecond.length === 0) {
    return true;
  } else {
    return false;
  }
}
