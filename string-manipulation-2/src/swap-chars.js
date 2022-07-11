/* exported swapChars */

/*
    declare function name swapChars with 3 parameters (firstIndex, secondIndex, string)
    initialize variable array with method split of string
    initialize variable temp with string at firstIndex
    reassign string at firstIndex with string at secondIndex
    reassign string at secondIndex with temp
    reassign string with join method of array
    return string
*/

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  string = array.join('');
  return string;
}
