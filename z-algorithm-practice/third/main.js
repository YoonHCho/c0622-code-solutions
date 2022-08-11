/** ALL LONGEST STRINGS
 * Given an array of strings, return another array containing all of its longest strings.
 * Example
 * For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
 * solution(inputArray) = ["aba", "vcd", "aba"]. */

function solution1(inputArray) {
  var longest;
  var longArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (i !== 0) {
      if (inputArray[i].length > longest) {
        longest = inputArray[i].length;
      }
    } else if (i === 0) {
      longest = inputArray[i].length;
    }
  }
  for (var k = 0; k < inputArray.length; k++) {
    if (inputArray[k].length === longest) {
      longArray.push(inputArray[k]);
    }
  }
  return longArray;
}
solution1(['a',
  'abc',
  'cbd',
  'zzzzzz',
  'a',
  'abcdef',
  'asasa',
  'aaaaaa']);

/** COMMON CHARACTER COUNT
 * Given two strings, find the number of common characters between them.
 * Example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be
 * solution(s1, s2) = 3.
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function solution2(s1, s2) {
  var count = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var k = 0; k < s2.length; k++) {
      if (s1[i] === s2[k]) {
        count++;
        s2 = s2.replace(s2[k], '');
        break;
      }
    }
  }
  return count;
}
solution2('abca', 'xyzbac');

/** IS LUCKY
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky
 * if the sum of the first half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 * Example
 * For n = 1230, the output should be
 * solution(n) = true;
 * For n = 239017, the output should be
 * solution(n) = false.
 */

function solution3(n) {
  var numToString = String(n);
  var middle = numToString.length / 2;
  var firstTotal = 0;
  var secondTotal = 0;
  for (var i = 0; i < middle; i++) {
    firstTotal += parseInt(numToString[i]);
  }
  for (var k = middle; k < numToString.length; k++) {
    secondTotal += parseInt(numToString[k]);
  }
  if (firstTotal === secondTotal) {
    return true;
  } else {
    return false;
  }
}
solution3(261534);

/** SORT BY HEIGHT
 * Some people are standing in a row in a park. There are trees between them which cannot be moved.
 * Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * People can be very tall!
 * Example
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 * solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/
