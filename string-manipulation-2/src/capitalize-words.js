/* exported capitalizeWords */

/*
    declare function named capitalizeWords with 1 parameter (string)
    initialize variable array and assign the result of method string.split with a space
    loop through the array
    for each array at index and for the 0 index of array at index, uppercase. and rest of string lowercase
    then join the array into string
    return string
*/

function capitalizeWords(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
  }
  string = array.join(' ');
  return string;
}
