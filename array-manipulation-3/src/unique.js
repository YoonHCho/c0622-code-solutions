/* exported unique */

/*  methods that might be useful includes()
  declare function named unique with one parameter (array)
  new variable newArray with empty array literal
  for loop thru the array
  if value of array at i is already included in newArray continue
  if not, push to newArray
  outside the for loop return newArray
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
