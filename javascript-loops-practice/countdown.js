/* exported countdown */
function countdown(number) {
  var array = [];
  var counter = number;
  while (counter >= 0) {
    array.push(counter);
    counter--;
  }
  return array;
}
