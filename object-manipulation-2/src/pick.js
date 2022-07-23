/* exported pick */

/*
  declare function named pick with 2 parameters (source, keys)
  get only the properties of source into new variable
  get only the values of source into new variable
  new variable for empty object literal
  check if the lenght of key is greater than length of source if so,
  loop through prop length
  loop through key length
  if proparray at index equal to keys at array
  check if value isnot undefined if true,
  new the value to the propert to the object
  else
  for in loop for source
  loop through key length
  if property is equal to keys at index
  check if source property vale is not undefine if true
  add the property with the value into the newArray
  return newArray
*/

// function pick(source, keys) {
//   var propArray = Object.keys(source);
//   var valueArray = Object.values(source);
//   var newArray = {};

//   if (propArray.length < keys.length) {
//     for (var i = 0; i < propArray.length; i++) {
//       for (var k = 0; k < keys.length; k++) {
//         if (propArray[i] === keys[k]) {
//           if (valueArray[i] !== undefined) {
//             newArray[propArray[i]] = valueArray[i];
//           }
//         }
//       }
//     }
//   } else {
//     for (var prop in source) {
//       for (var j = 0; j < keys.length; j++) {
//         if (prop === keys[j]) {
//           if (source[prop] !== undefined) {
//             newArray[prop] = source[prop];
//           }
//         }
//       }
//     }
//   }
//   return newArray;
// }

function pick(source, keys) {
  var newArray = {};

  for (var prop in source) {
    for (var j = 0; j < keys.length; j++) {
      if (prop === keys[j]) {
        if (source[prop] !== undefined) {
          newArray[prop] = source[prop];
        }
      }
    }
  }
  return newArray;
}
