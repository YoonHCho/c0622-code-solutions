/* exported isAnagram */

/*
  declare a function named isAnagram with 2 parameter (firstString, secondString)
  set a counter to increment when same with comparing secondString with firstString
  create new variable checkFirst and reassign firstString
  create new variable checkSecond and reassign secondString
  loop throu firstString
  loop throu secondString
  if firstString at [i] matches secondString at [i]
  replace the secondString at [i] with nothing, increament counter, and break out of second for loop
  outside of all the for loop if counter equals to checkFirst.length AND checkSecond.length equals to 0
  return true
  else return false.
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
