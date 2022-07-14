/* exported firstChars */

/*
    declare function named firstChars with 2 parameters (length, string)
    need to get all index til the length(excluded). reassisgn string with substring method with argument 0 and length
    return string
*/

function firstChars(length, string) {
  string = string.substring(0, length);
  return string;
}
