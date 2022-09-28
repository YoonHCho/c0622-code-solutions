/* exported getLength */

function getLength(list) {
  if (list.next === null) {
    return 1;
  }
  let counter = 1;
  while (list.next !== null) {
    counter++;
    list = list.next;
  }
  return counter;
}
