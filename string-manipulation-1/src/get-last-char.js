/* exported getLastChar */

/*
    1. write a function declared with name getLastChar with one parameter string
    2. get the string and get the last char with property .length and subtract -1 from it since it will be 0 indexed, return this result of expression from function
*/

function getLastChar(string) {
  return string[string.length - 1];
}
