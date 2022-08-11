/** Write a function that returns the sum of two numbers.
 *  Example
 * For param1 = 1 and param2 = 2, the output should be
 * solution(param1, param2) = 3.
*/

function solution(param1, param2) {
  return param1 + param2;
}
solution(2, 4);

/** Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100,
 * the second - from the year 101 up to and including the year 200, etc.
 * Example
 * For year = 1905, the output should be
 * solution(year) = 20;
 * For year = 1700, the output should be
 * solution(year) = 17.
 * */

function solution2(year) {
  return Math.ceil(year / 100);
}
solution2(101);

/** Given the string, check if it is a palindrome.
 * Example
 * For inputString = "aabaa", the output should be
 * solution(inputString) = true;
 * For inputString = "abac", the output should be
 * solution(inputString) = false;
 * For inputString = "a", the output should be
 * solution(inputString) = true. */

function solution3(inputString) {
  var stringReversed = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    stringReversed += inputString[i];
  }
  if (inputString === stringReversed) {
    return true;
  } else {
    return false;
  }
}
solution3('aabaa');

/** Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * Example
 * For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 * solution(inputArray) = 21.
 * 7 and 3 produce the largest product. */

function solution4(inputArray) {
  var highest;
  for (var i = 0; i < inputArray.length - 1; i++) {
    if (i === 0) {
      highest = inputArray[i] * inputArray[i + 1];
    } else if (inputArray[i] * inputArray[i + 1] > highest) {
      highest = inputArray[i] * inputArray[i + 1];
    }
  }
  return highest;
}
solution4([1, -7, 14, 9, 1, -10, 8]);

/** Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
 * A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained
 * by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
 * Example
 * For n = 2, the output should be
 * solution(n) = 5;
 * For n = 3, the output should be
 * solution(n) = 13. */

function solution5(n) {
  if (n === 1) {
    return 1;
  } else if (n - 1 === 1) {
    return Math.pow(n, 2) + 1;
  } else {
    return Math.pow(n, 2) + Math.pow(n - 1, 2);
  }
}
solution5(3); // should output 13

/** Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
 * Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than
 * the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
 * Help him figure out the minimum number of additional statues needed.
 * Example
 * For statues = [6, 2, 3, 8], the output should be
 * solution(statues) = 3.
 * Ratiorg needs statues of sizes 4, 5 and 7. */

/** get the min and the max of the array.
 * using start as a initial expression and end as the condition expression
 */

function solution6(statues) {
  // can use spread syntax or spread operator, it is a short hand for apply which can be written var start = Math.min.apply(Math, arr);
  var start = Math.min(...statues);
  var end = Math.max(...statues);
  var needed = 0;
  for (var i = start; i <= end; i++) {
    if (!statues.includes(i)) {
      needed++;
    }
  }
  return needed;
}
solution6([6, 2, 3, 8]);

/** Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
 * increasing sequence by removing no more than one element from the array.
 * Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
 * Sequence containing only one element is also considered to be strictly increasing.
 * Example
 * For sequence = [1, 3, 2, 1], the output should be
 * solution(sequence) = false.
 * There is no one element in this array that can be removed in order to get a strictly increasing sequence.
 * For sequence = [1, 3, 2], the output should be
 * solution(sequence) = true.
 * You can remove 3 from the array to get the strictly increasing sequence [1, 2].
 * Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]. */
